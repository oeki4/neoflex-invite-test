import "./basket-card.scss";
import { useTranslation } from "react-i18next";
import { BasketItem } from "../../model/types/basketItem.ts";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import WhiteTrash from "@/shared/ui/icons/WhiteTrash.tsx";
import Trash from "@/shared/ui/icons/Trash.tsx";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useCallback } from "react";
import { basketSliceActions } from "@/entities/Basket";

export interface BasketCardProps {
  product: BasketItem;
  currencyRate: number;
}

const BasketCard = ({ product, currencyRate }: BasketCardProps) => {
  const { t } = useTranslation();
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
    <div className="card">
      <div className="card__info">
        <div className="card__img">
          <img
            className="card__img-inner"
            src={`/img/products/${product.photo}`}
            alt="photo"
          />
        </div>
        <div className="card__desc">
          <p className="card__desc-name">{product.title}</p>
          <p className="price">
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(product?.priceWithDiscount * currencyRate),
                })
              : t("${{num}}", {
                  num: priceNumToStr(product?.price * currencyRate),
                })}
            {product.priceWithDiscount && (
              <span className="discount">
                {t("${{num}}", {
                  num: priceNumToStr(product?.price * currencyRate),
                })}
              </span>
            )}
          </p>
        </div>
        <div className="card__switch-price">
          <div className="switch">
            <button
              onClick={onSubtractBasketItemAmount}
              className="switch__btn"
            >
              &#8211;
            </button>
            <span className="switch__value">{product.amount}</span>
            <button onClick={onAddBasketItemAmount} className="switch__btn">
              +
            </button>
          </div>
          <p className="price price--result">
            {product.priceWithDiscount
              ? t("${{num}}", {
                  num: priceNumToStr(
                    product.priceWithDiscount * product.amount * currencyRate,
                  ),
                })
              : t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * currencyRate,
                  ),
                })}
            {product.priceWithDiscount ? (
              <span className="discount discount--result">
                {t("${{num}}", {
                  num: priceNumToStr(
                    product.price * product.amount * currencyRate,
                  ),
                })}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <button onClick={onDeleteBasketItem} className="card__delete">
        <WhiteTrash />
      </button>
      <span onClick={onDeleteBasketItem} className="card__trash">
        <Trash />
      </span>
    </div>
  );
};

export default BasketCard;
