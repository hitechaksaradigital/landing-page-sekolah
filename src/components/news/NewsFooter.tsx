
export default function NewsFooter() {
  return (
    <footer className="bg-surface-container-lowest w-full mt-stack-lg border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-page py-stack-md max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-headline-md text-headline-md text-secondary">SMPN 1 Hitech</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Membentuk pemimpin masa depan melalui inovasi teknologi dan integritas akademik.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined">language</span>
            </a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-title-lg text-title-lg text-white">Pranala Luar</h4>
          <div className="flex flex-col gap-2">
            <a className="text-on-surface-variant hover:text-tertiary transition-colors font-body-md text-body-md" href="#">
              Contact
            </a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors font-body-md text-body-md" href="#">
              Privacy Policy
            </a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors font-body-md text-body-md" href="#">
              Security
            </a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors font-body-md text-body-md" href="#">
              Newsletter
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-title-lg text-title-lg text-white">Alamat</h4>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Jl. Teknologi Digital No. 101
            <br />
            Jakarta Pusat, DKI Jakarta
            <br />
            Indonesia, 10110
          </p>
          <p className="font-body-md text-body-md text-secondary mt-4">© 2024 SMPN 1 Hitech. Excellence in Innovation.</p>
        </div>
      </div>
    </footer>
  );
}
