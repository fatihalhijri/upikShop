import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  nama: string;
  email: string;
  keterangan: string;
  pesan: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgggzbp");

  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    keterangan: "",
    pesan: "",
  });
  const handleClick = () => {
    window.open("https://wa.me/6287878991905", "_blank");
  };

  // Fungsi untuk menampilkan notifikasi saat berhasil
  const showSuccessNotification = () => {
    toast.success("Pesan Anda Terkirim!");
  };

  // Fungsi validasi nama harus lebih dari 3 karakter
  const isFormValid = (): boolean => {
    if (formData.nama.length < 3) {
      toast.error("Nama harus lebih dari 3 karakter!");
      return false;
    }
    return true;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah halaman ter-refresh

    if (!isFormValid()) return;

    await handleSubmit(event);

    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  };
  useEffect(() => {
    if (state.succeeded) {
      showSuccessNotification(); // Menampilkan notifikasi jika pengiriman berhasil
      // Reset form setelah berhasil submit
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  }, [state.succeeded]); 
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="w-full max-h-full bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:pt-40 pt-32 px-6 md:px-20 lg:px-36 pb-[3rem] md:py-8 flex flex-col items-center justify-center">
        <h2 className="font-medium md:font-semibold text-center md:text-2xl lg:text-3xl text-black/80 text-xl py-4  uppercase ">
          Kontak Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center  mx-auto ">
          <div>
            <p
              className="text-base text-black/70  font-semibold opacity-75"
              id="contact"
            >
              Mari Terhubung
            </p>
            <h1 className="lg:text-5xl md:text-2xl text-[30px] pt-2 text-black/70 leading-3 font-semibold ">
              Hubungi <span className="text-accent">Kami</span>{" "}
            </h1>
            <p className="text-[15px] md:text-base  opacity-75 text-black mt-[1rem] text-justify ">
              Dengan pengalaman dan dedikasi, saya siap membantu Anda mencapai
              visi yang Anda impikan.
            </p>
            <button onClick={handleClick} className="cursor-pointer">

            <h1 className="md:mt-[2rem] md:mb-[2rem] md:text-[30px] text-primary underline font-bold">
              +62 851-7962-0695
            </h1>
            </button>
          </div>

          <div>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center ">
                <input
                  type="text"
                  placeholder="Nama"
                  value={formData.nama}
                  name="nama"
                  className="py-[0.7rem] outline-none text-black  bg-black/10 dark:bg-darkTua rounded-md px-4"
                  required
                  onChange={handleInputChange}
                />

                <input
                  value={formData.email}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="py-[0.7rem] outline-none text-black  bg-black/10 dark:bg-darkTua rounded-md px-4"
                  required
                  onChange={handleInputChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <input
                value={formData.keterangan}
                type="text"
                placeholder="Keterangan"
                name="keterangan"
                className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-black  bg-black/10 dark:bg-darkTua rounded-md px-4"
                required
                onChange={handleInputChange}
              />

              <textarea
                value={formData.pesan}
                placeholder="Pesan"
                name="pesan"
                id="pesan"
                rows={4}
                className="py-[0.7rem] w-full outline-none text-black  bg-black/10 dark:bg-darkTua px-4 rounded-md"
                required
                onChange={handleInputChange}
              ></textarea>
              <ValidationError
                prefix="pesan"
                field="pesan"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full text-white bg-accent hover:bg-green-600 rounded-md px-4 font-semibold"
              >
                {state.submitting ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
