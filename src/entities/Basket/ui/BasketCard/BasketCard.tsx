import styles from "./basket-card.module.scss";
import { useTranslation } from "react-i18next";
import { BasketItem } from "../../model/types/basketItem.ts";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import WhiteTrash from "@/shared/ui/icons/WhiteTrash.tsx";
import Trash from "@/shared/ui/icons/Trash.tsx";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useCallback } from "react";
import { basketSliceActions } from "@/entities/Basket";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector.ts";
import { getLang } from "@/entities/User";

export interface BasketCardProps {
  product: BasketItem;
}

const BasketCard = ({ product }: BasketCardProps) => {
  const { t } = useTranslation();
  const lang = useAppSelector(getLang);
  const dispatch = useAppDispatch();
  const onDeleteBasketItem = useCallback(() => {
    dispatch(basketSliceActions.deleteBasketItem(product.id));
  }, [dispatch, product.id]);

  const onAddBasketItemAmount = useCallback(() => {
    dispatch(
      basketSliceActions.setBasketItemAmount({
        id: product.id,
        value: product.amount + 1,
      }),
    );
  }, [dispatch, product.amount, product.id]);
  const onSubtractBasketItemAmount = useCallback(() => {
    dispatch(
      basketSliceActions.setBasketItemAmount({
        id: product.id,
        value: product.amount - 1,
      }),
    );
  }, [dispatch, product.amount, product.id]);
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.cardImg}>
          <img
            className={styles.cardImgInner}
            src={`/img/products/${product.photo}`}
            alt="photo"
          />
        </div>
        <div className={styles.cardDesc}>
          <p className={styles.cardDescName}>{product.title}</p>
          <p className={styles.price}>
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(
                    product?.priceWithDiscount * lang.currencyRate,
                  ),
                })
              : t("${{num}}", {
                  num: priceNumToStr(product?.price * lang.currencyRate),
                })}
            {product.priceWithDiscount && (
              <span className={styles.discount}>
                {t("${{num}}", {
                  num: priceNumToStr(product?.price * lang.currencyRate),
                })}
              </span>
            )}
          </p>
        </div>
        <div className={styles.cardSwitchPrice}>
          <div className={styles.switch}>
            <button
              onClick={onSubtractBasketItemAmount}
              className={styles.switchBtn}
            >
              &#8211;
            </button>
            <span className={styles.switchValue}>{product.amount}</span>
            <button
              onClick={onAddBasketItemAmount}
              className={styles.switchBtn}
            >
              +
            </button>
          </div>
          <p className={`${styles.price} ${styles.priceResult}`}>
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(
                    product.priceWithDiscount *
                      product.amount *
                      lang.currencyRate,
                  ),
                })
              : t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * lang.currencyRate,
                  ),
                })}
            {product.priceWithDiscount && (
              <span className={`${styles.discount} ${styles.discountResult}`}>
                {t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * lang.currencyRate,
                  ),
                })}
              </span>
            )}
          </p>
        </div>
      </div>
      <button onClick={onDeleteBasketItem} className={styles.cardDelete}>
        <WhiteTrash />
      </button>
      <span onClick={onDeleteBasketItem} className={styles.cardTrash}>
        <Trash />
      </span>
    </div>
  );
};

export default BasketCard;
