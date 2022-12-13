import useMapState from "../../../utils/hook/useMapState";
import {useOnlyInitialEffect} from "../../../utils/hook/useUpdateEffect";

const IMAGES = [
  "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg",
  "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg",
  "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg",
  "https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg",
];

const IMG_MAP = new Map<string, any>([
  ["main_img", ""],
  ["number_img", 0],
]);

const ImageShow = () => {
  const [imgMap, actionMap] = useMapState<any, any>(IMG_MAP);

  useOnlyInitialEffect(() => {
    actionMap.set("main_img", IMAGES[0]);
  });

  const changeImage = (img, index) => {
    actionMap.set("main_img", img);
    actionMap.set("number_img", index);
  };

  return (
    <>
      <div className="col p-5 m-12">
        <div className="pro-product-detail-img">
          <div
            className="pro-product-detail-img-main"
            style={{
              backgroundImage: `url(${imgMap.get("main_img")})`,
            }}
          />

          <div className="pro-product-detail-img-sub">
            {IMAGES.map((img, index) => {
              if (imgMap.get("number_img") === index) {
                return (
                  <div
                    key={index}
                    className="detail-img-sub-img active"
                    style={{backgroundImage: `url(${img})`}}
                    data-img-sub={img}
                    onClick={() => changeImage(img, index)}
                  />
                );
              }
              return (
                <div
                  key={index}
                  className="detail-img-sub-img"
                  style={{backgroundImage: `url(${img})`}}
                  data-img-sub={img}
                  onClick={() => changeImage(img, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageShow;
