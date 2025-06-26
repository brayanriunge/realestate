export default function Footer() {
  return (
    <div className="mx-auto w-full flex flex-row items-center justify-between  ">
      {/* location */}
      <div className=" flex flex-col gap-4 ">
        <p>
          loction:{" "}
          <span> Nyahururu, Heshima building opposite Mbaari Building</span>
        </p>
        <p></p>
      </div>
      {/* Contacts */}
      <div className="flex flex-col justify-between items-center gap-4"></div>
    </div>
  );
}
