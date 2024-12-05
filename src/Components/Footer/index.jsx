export default function Index() {
  return (
    <div>
      <footer
        className="w-full h-[100px] flex items-center justify-center mt-[24px]"
        style={{
          background: "#001733",
          color: "#ffffff",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-[16px] leading-[24px] font-light">
            © 2024 - Tüm Hakları Saklıdır.
          </p>
          <p className="text-[12px] leading-[20px] mt-2">
            Tasarım ve Geliştirme: Ruya Ciftci
          </p>
        </div>
      </footer>
    </div>
  );
}
