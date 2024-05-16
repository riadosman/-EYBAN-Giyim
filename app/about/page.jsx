import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="mb-5">
      <div className="container">
        <Image
          src="/about.png"
          alt=""
          width={1000}
          height={1000}
          className="w-full md:h-[400px] h-[200px]"
        />
        <p className="md:text-6xl text-3xl text-center my-10">
          ما هو متجر شيبان
        </p>
        <p className="text-center md:text-xl text-lg md:leading-loose">
          مرحبًا بكم في متجرنا، وجهتكم المثالية لعالم الأناقة والموضة. نحن نقدم
          مجموعة واسعة ومتميزة من الأزياء والملابس التي تلبي احتياجات جميع
          الفئات العمرية، بدءًا من الملابس الرجالية والنسائية وصولًا إلى ملابس
          الأطفال بمختلف أعمارهم. لدينا تشكيلة متنوعة من الأزياء الكلاسيكية
          والعصرية، بما في ذلك الملابس اليومية والملابس الرسمية وملابس المناسبات
          الخاصة. بالإضافة إلى الملابس، نوفر أيضًا تشكيلة متنوعة من الإكسسوارات
          المكملة مثل الأحذية والحقائب والأحزمة والمجوهرات والقبعات، مما يساعدك
          على إضفاء لمسة شخصية على إطلالتك. نولي أهمية خاصة لجودة المنتجات ونحرص
          على انتقاء أفضل الخامات والمواد لضمان راحة العملاء ورضاهم. كما نتابع
          آخر صيحات الموضة باستمرار لنقدم لكم أحدث الاتجاهات بأسعار تنافسية. في
          متجرنا، نقدم تجربة تسوق مريحة وممتعة من خلال تنظيم المتجر بشكل أنيق
          وواضح لتسهيل العثور على ما تبحث عنه. بالإضافة إلى ذلك، فريقنا المحترف
          والودود على استعداد دائمًا لمساعدتك في اختيار القطع المناسبة وتقديم
          المشورة حول الأنماط والأحجام. نحرص على توفير عروض وتخفيضات موسمية لجعل
          تجربة التسوق أكثر متعة وإثارة. ندعوكم لزيارة متجرنا واستكشاف تشكيلتنا
          الواسعة التي تلبي جميع الأذواق وتناسب جميع المناسبات
        </p>
        <p className="md:text-6xl text-3xl text-center my-20">العروض</p>
        <div>
          {/* تصميم الصور من الصفر الى هنا */}
          <div className="fx md:gap-20 flex-col md:flex-row">
            <Image
              src="/hero.jpg"
              className="md:w-1/2 my-5 md:my-0"
              alt="first"
              width={900}
              height={900}
            />
            <div className="flex flex-col md:w-1/2">
              <p className="text-right leading-loose ">
                تسوق بأفضل الأسعار في متجرنا! يسعدنا أن نعلن عن انطلاق حملة
                التخفيضات الكبرى، حيث يمكنك الحصول على خصومات رائعة على مجموعة
                متنوعة من الملابس لجميع الفئات العمرية: خصومات تصل إلى 50% على
                الملابس الرجالية، بما في ذلك القمصان والبناطيل والمعاطف
                والبذلات. خصومات تصل إلى 60% على الملابس النسائية، مثل الفساتين
                والتنانير والبلوزات والمعاطف. خصومات تصل إلى 70% على ملابس
                الأطفال، من الملابس اليومية إلى الملابس الرسمية. عروض خاصة على
                الإكسسوارات: استمتع بخصومات مميزة على الأحذية والحقائب والأحزمة
                والمجوهرات. هذه فرصة لا تُفوت! استفد من هذه العروض المغرية.
                اختَر ما يناسبك من الأزياء بأفضل الأسعار. العرض ساري لفترة
                محدودة، فلا تفوِّت الفرصة
              </p>
              <Link
                href="/products"
                className="bg-main px-4 py-2 rounded w-fit my-10 hover:bg-transparent border-main duration-200 border-2"
              >
                ابدء بطلب منتجاتك الان
              </Link>
            </div>
          </div>
          <div className="c3-bg"></div>
          <div className="fx md:gap-20 flex-col md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <p className="text-right leading-loose">
                تسوق بأفضل الأسعار في متجرنا! يسعدنا أن نعلن عن انطلاق حملة
                التخفيضات الكبرى، حيث يمكنك الحصول على خصومات رائعة على مجموعة
                متنوعة من الملابس لجميع الفئات العمرية: خصومات تصل إلى 50% على
                الملابس الرجالية، بما في ذلك القمصان والبناطيل والمعاطف
                والبذلات. خصومات تصل إلى 60% على الملابس النسائية، مثل الفساتين
                والتنانير والبلوزات والمعاطف. خصومات تصل إلى 70% على ملابس
                الأطفال، من الملابس اليومية إلى الملابس الرسمية. عروض خاصة على
                الإكسسوارات: استمتع بخصومات مميزة على الأحذية والحقائب والأحزمة
                والمجوهرات. هذه فرصة لا تُفوت! استفد من هذه العروض المغرية.
                اختَر ما يناسبك من الأزياء بأفضل الأسعار. العرض ساري لفترة
                محدودة، فلا تفوِّت الفرصة
              </p>
              <Link
                href="/products"
                className="bg-main px-4 py-2 rounded w-fit my-10 hover:bg-transparent border-main duration-200 border-2"
              >
                ابدء بطلب منتجاتك الان
              </Link>
            </div>
            <Image
              src="/hero.jpg"
              className="md:w-1/2 my-5 md:my-0"
              alt="second"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
}