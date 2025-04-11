import "./product-card.scss";
import Star from "@/shared/ui/icons/Star.tsx";
import Eye from "@/shared/ui/icons/Eye.tsx";
import { useTranslation } from "react-i18next";
import { priceNumToStr } from "@/shared/lib/priceNumToStr.ts";
import { Product } from "@/types/pages/catalog.types.ts";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useCallback } from "react";
import { catalogPageSliceActions } from "@/pages/CatalogPage";

interface ProductCardProps {
  product: Product;
  addToBasket: (product: Product) => void;
  currencyRate: number;
}

export const ProductCard = ({
  product,
  addToBasket,
  currencyRate,
}: ProductCardProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onShowProductModal = useCallback(() => {
    dispatch(catalogPageSliceActions.showProductModal());
    dispatch(catalogPageSliceActions.setSelectedProduct(product));
  }, [dispatch, product]);
  return (
    <div className="product-card">
      <span onClick={onShowProductModal} className="product-card__more-btn">
        <Eye />
      </span>
      <div className="product-card__img-wrapper">
        <img
          src={`/img/products/${product.photo}`}
          alt=""
          className="product-card__img"
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">{product.title}</p>
        {product.priceWithDiscount ? (
          <p className="product-card__price">
            {t("${{num}}", {
              num: priceNumToStr(product.priceWithDiscount * currencyRate),
            })}
            <span className="product-card__discount">
              {t("${{num}}", {
                num: priceNumToStr(product.price * currencyRate),
              })}
            </span>
          </p>
        ) : (
          <p className="product-card__price">
            {t("${{num}}", {
              num: priceNumToStr(product.price * currencyRate),
            })}
          </p>
        )}
        <div className="product-card__rate-wrapper">
          <Star />
          <p className="product-card__rate">{product.rate}</p>
        </div>
        <button
          onClick={() => addToBasket(product)}
          className="product-card__buy-btn"
        >
          {t("Buy")}
        </button>
      </div>
    </div>
  );
};
