import Image from "next/image";


function ServerError() {
  return (
    <div className="flex flex-col items-center mt-[20px] relative pb-[140px]">
      {/* <img
        className="w-[322px]"
        src="/images/ErrorLampRobot.png"
        alt="Error Lamp Robot"
      /> */}

      <Image
              src="/images/ErrorLampRobot.png"
              width={644}
              height={644}
              alt="تصویر خطای اتصال به اینترنت"
              loading="eager"
              className="w-[322px]"
            />
      <p className="fw-600 text-[24px] absolute top-[297px]">
        اتصال با سرور برقرار نیست!
      </p>
      <p className="text-[16px] mt-[32px] fw-600">
        لطفا بعدا دوباره امتحان کنید.
      </p>
    </div>
  );
}

export default ServerError;
