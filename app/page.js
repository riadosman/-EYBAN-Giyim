import Image from "next/image";
import Cards from "./../components/cards/Cards";
import Categorys from "./../components/categorys/Categorys";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="c-bg"></div>
        <div className="fx flex-col md:flex-row">
          <Image
            src="/hero.jpg"
            alt=""
            width={400}
            height={400}
            className="my-10 rounded"
          />
          <div className="md:p-20 text-right">
            <h1 className="md:text-6xl text-3xl my-5">اهلاً بكم في متجرنا</h1>
            <p>
              انشء اسلوبك في اللبس بجوده عالية وسعر مناسب مع شيبان للملابسه كن
              كلنجم بلسماء
            </p>
          </div>
        </div>
        <div className="mb-10 text-center mt-36 md:mt-0">
          <h1 className="md:text-6xl text-3xl my-5">أحدث الموديلات</h1>
          <p>اختر الزي المنساب للوقت المناسب</p>
        </div>
        <div className="c1-bg"></div>
        <Cards />
        <div className="c2-bg"></div>
        <div className="my-12 text-center">
          <h1 className="md:text-6xl text-3xl">نبذا عن المنتجات الموجودة</h1>
          <p>كل ما تريده في مكان واحد</p>
        </div>
        <Categorys />
      </div>
    </div>
  );
}
