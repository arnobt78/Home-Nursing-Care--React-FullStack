import newsImg1 from "../../assets/wissenswertesPageImg/aktuelles/news-1.png";
import newsImg2 from "../../assets/wissenswertesPageImg/aktuelles/news-2.png";
import newsImg3 from "../../assets/wissenswertesPageImg/aktuelles/news-3.png";
import newsImg4 from "../../assets/wissenswertesPageImg/aktuelles/news-4.png";
import newsImg5 from "../../assets/wissenswertesPageImg/aktuelles/news-5.png";

const Aktuelles = () => {
  const newsData = [
    {
      id: 1,
      platform: "linkedin",
      image: newsImg1, // Fixed: Directly reference the imported image
      text: "We are hiring employees for various positions in Germany. Join our team and grow with us!",
      hashtags: "#hiring #jobs #sernitasgroup #sernitascare",
      link: "https://www.linkedin.com/company/sernitas/posts/",
    },
    {
      id: 2,
      platform: "linkedin",
      image: newsImg2, // Fixed: Directly reference the imported image
      text: "Discover the latest updates and innovations in healthcare and nursing with Sernitas Group.",
      hashtags: "#healthcare #innovation #sernitasgroup #sernitascare",
      link: "https://www.linkedin.com/company/sernitas/posts/",
    },
    {
      id: 3,
      platform: "instagram",
      image: newsImg3, // Fixed: Directly reference the imported image
      text: "Almanya, 1 Mart 2023 tarihinde yürürlüğe giren yasa ile yurt dışından sağlık çalışanı istihdam etmektedir.",
      hashtags:
        "#almanya #almanca #sernitasgroup #almanyaiş #hemşire #sernitascare",
      link: "https://www.instagram.com/sernitashrturkey?igsh=MWphd210cjVod3hjbg%3D%3D",
    },
    {
      id: 4,
      platform: "instagram",
      image: newsImg4, // Fixed: Directly reference the imported image
      text: "Kuzey Ren-Vestfalya’daki büyük bir klinik için bu ve gelecek yıl için hemşireler arıyoruz.",
      hashtags: "#denklik #hemşire #hemşirelik #sernitasgroup #sernitascare",
      link: "https://www.instagram.com/p/CtjAjcygsoa/",
    },
    {
      id: 5,
      platform: "linkedin",
      image: newsImg5, // Fixed: Directly reference the imported image
      text: '"MÜŞTERİ İLİŞKİLERİ ASİSTANI" Arıyoruz. -Tercihen Lisans Mezunu -En az 2 yıl deneyimli',
      hashtags: "#hiring #işealım #istanbul #asistan #sernitascare",
      link: "https://www.linkedin.com/posts/sernitas_hiring-iagnealaftm-istanbuliagn-activity-6976144925885104128-NP7q/?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Header Section */}
      <div className="space-y-6">
        <h2 className="text-2xl xl:text-3xl font-bold text-green-700">
          Aktuelles bei Sernitas Care
        </h2>
        <p className="text-primary/90 text-justify">
          Immer informiert – über Pflege, Gesundheit & Gesellschaft
        </p>
        <p className="text-primary/90 text-justify">
          Bei Sernitas Care bleiben Sie auf dem neuesten Stand rund um die
          Themen Pflege, Gesundheitspolitik und Fachkräfteentwicklung. Auf
          dieser Seite finden Sie aktuelle Nachrichten, Fachbeiträge,
          Blogartikel, Pressemeldungen sowie spannende Einblicke in unsere
          tägliche Arbeit.
        </p>
        <p className="text-primary/90 text-justify">
          Unsere Beiträge informieren nicht nur über gesetzliche Neuerungen und
          Pflegestandards, sondern werfen auch einen Blick über den Tellerrand –
          etwa auf internationale Fachkräftegewinnung, Digitalisierung im
          Gesundheitswesen oder Innovationen in der Pflege.
        </p>
      </div>

      {/* News Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
        {newsData.map((news) => (
          <a
            key={news.id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <img
                src={news.image}
                alt="News"
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-2 left-2 bg-transparent rounded-full">
                {news.platform === "instagram" ? (
                  <i className="fab fa-instagram text-pink-500 text-xl"></i>
                ) : (
                  <i className="fab fa-linkedin text-blue-700 text-xl"></i>
                )}
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-primary/90 text-sm mb-2">{news.text}</p>
              <p className="text-gray-400 text-xs">{news.hashtags}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Aktuelles;
