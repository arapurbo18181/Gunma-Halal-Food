import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CategorySidebar from "../components/CategorySidebar";
import { useProduct } from "../context/ProductContext";
import CartButton from "../components/CartButton";

const About = () => {
  const { progress, setProgress } = useProduct();
  return (
    <>
      <section className="flex justify-center items-start w-full overflow-hidden">
        <div className="flex justify-start items-center xl:items-start w-[100%]">
          <div className="hidden w-[16.5vw] h-full sticky top-[5.3rem] xl:block ">
            <CategorySidebar />
            <CartButton/>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-center space-y-20">
            <BreadCrumbs name={"About"} url={"about"} />
            <div className="space-y-4 px-16">
              <h2 className="text-4xl font-bold mb-10">
                Welcome to Gunma Halal Food!! This is a part of IBADAH Company
                Ltd.
              </h2>
              <p className="">
                We are providing Halal foods, Grocery items and mobile phones.
                We are specialized in providing the highest quality products
                with friendly and high speed delivery Service.
              </p>
              <h3 className="text-lg font-semibold">
                We hope you enjoy our products as much as we enjoy offering them
                to you. If you have any questions or comments, please don’t
                hesitate to contact us.
              </h3>
              <h3 className="text-lg font-semibold">
                Our store address: 〒374-0055 Gunmaken, tatebayashi-shi,
                narushima-cho 222-1-2A
              </h3>
              <h3 className="text-lg font-semibold">Tel & Fax: 0276-57-6420</h3>
              <h3 className="text-lg font-semibold">
                Phone: 080-3919-9020 (WhatsApp)
              </h3>
              <h3 className="text-lg font-semibold">
                E-mail:- support@gunmahalalfood.com
              </h3>
            </div>
            <div className="space-y-4 px-16">
              <h3 className="text-3xl font-bold text-blue-700">会社案内</h3>
              <h3 className="text-3xl font-bold">会社名：株式会社IBADAH</h3>
              <h4 className="font-bold">会社法人等番号：4070-00-1038657　</h4>
              <h4 className="font-bold">店舗名：GUNMA HALAL FOOD</h4>
              <h4 className="font-bold">代行者：代表取締役ホセンイムラン</h4>
              <h4 className="font-bold"> 運営統括責任者: ホセンイムラン</h4>
              <h4 className="font-bold">事業内容：食品の通信販売 </h4>
              <h4 className="font-bold">
                所在地：〒374-0055 群馬県館林市成島町222番地タツザワビル1ー２A
              </h4>
              <h4 className="font-bold">電話番号・FAX：0276-57-6420</h4>
              <h4 className="font-bold">
                メールアドレス：support@gunmahalalfood.com
              </h4>
              <h4 className="font-bold">
                お支払方法：銀行振込み・代金引換・クレジットカード
              </h4>
              <h4 className="font-bold">
                商品代金以外の必要金額：8500円未満のお買い上げで、送料1200円。代引き手数料0円、3万円未満0円、10万円未満0円、10万円以上30万円まで0円一律0円。
              </h4>
              <h4 className="font-bold">
                商品引渡し時期:　前払いの場合、入金確認後1日営業日以内で発送致します。
                その他のお支払いの場合、注文確認後２営業日以内で発送致します。
              </h4>
              <p>
                {" "}
                返品について:「不良品・当社の商品の間違い」の場合は当社が負担いたします。
              </p>
              <p>
                {" "}
                配送途中の破損などの事故がございましたら、弊社までご連絡下さい。
              </p>
              <p>送料・手数料ともに弊社負担で早急に新品をご送付致します。</p>
              <p>
                【返品時期】ご購入後3日以内にご連絡があった場合に返金可能となります
              </p>
              <p>
                【返品方法】メールにて返金要請してください。3日以内にご購入代金を指定の口座へお振込みいたします。
              </p>
            </div>
            <div>
              {/* <Footer/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
