import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import React from "react";
import signup from "/public/signup.png";

const page = () => {
  return (
    <main className="">
      <Header />
      <div className="flex h-auto w-screen border-t">
        <div className="flex-1 basis-auto bg-[#F5F9FF] border-r flex justify-center items-center">
          <div>
            <h1 className="text-3xl">Mobile Developer Jobs</h1>
            <p className=" text-base text-gray-700 my-3">
              Join us today and find your dream job
            </p>
            <Image width={300} height={200} src={signup} alt="" />
          </div>
        </div>
        <div className="flex-1 basis-auto pt-10 px-5">
          <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
          <div className="flex gap-20 items-center justify-center py-10">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOdSURBVHgBxZdNbBtFFMffm1knTXDAhzQqB2CDkODAwQqJQFyyVnpEigPlUDjE4cohOYJKFUdFcMS5U9k5oBQEkrmTeBGXqqGwHDl1K7VNpTaN08Zt0+zM69ttk9rurrOJbfUnWeudN/v+b77ezCDE5IqVTiXBSIOBk0CQRgCT+LdfAcHh8qom+hM1lofsNSeOX4wlLHpmEfUcAaYgJuzY1QQLQ6trpQPqRbMxMTZLQPnDCIcFsqt2M6/ajhthf551K20aMlHkvxZ0CsL88dVLC83FIkw8IROVjooH+pANKxdh4g2TqxPigE5N9WfCbEb9SyxxnuncmiUg5YCWjgJZNQzPBM0rA2GcxZpaSnZNvTQ1bNvVMHf7c2Dj5Oi85nFqJQyCFre9ZCHKmc+69YEppcqz42luzNLQyloOWhAEsPnVCdNbe+1KpDahq7TgmXzRhZjcnngvO7hyuXxQvSAAbyVRfHjpeO7hXyeAdmTb4ocBqQIpTyX81qf0Vg9s//QW+M89PCWHuyXuI5SSli8evLzyCAa++B96x249iQ6g1E3xQBNQTNYX4DEFfSevB79dJRegyxhEZIYlRO4FJ/n1DfcgB5lv75YQxTQcAV7ONiciTIcZOaRYu1k7IKHpZ8LQjUYRXYWuQ6aAF4zg9OmGGSTiG9B9qoInYXhaxc7uhmFwqnbx0R9GAQFnm40/3n8bztfeyfx9+lcb2mTiu+0K0fMN4jJbIEFDvr6nE/Dl1odwngMgpCMtr3qs7zfNMHEf5POj4K3UX27BMPyzOwjTW+PBM6gAkBtdPmVBGwidmI+yafB7IBOcZBd/fvBm0PJ11d8YJVIxvZw14QhMnKv5Z4NcmM0ff/vsgB0sw/evfVQo1N6tRlQ0Eygrhw3COnfPIkHFKDv7DdL8fg4euXBqTgD9AK1AyntaLzmny25UlXQxmzL6xXzvxtRc7+ZUlLhbOZMcbgjAZ/TCJ/EOowhlrfgCIrWLmocQhMleU0LgZP33Rm0E+m5/DugNNnzOYz9jn0mWnrhqil72iX95WZrQIQSL992cBbnz+lN1Wlg9O5B/1pYm/LGWKCqdDMKn904Weu5MLlW+eTlXXx56MQl64pgscJpuOw/sQRoWL3/221xzecur2cjyxzkOYr6d3gjSLeFMVEY98HLaRiC21vS73tElZ6YceYyPFcAeY798mlaesoTEcX/W88XVfOYIq/4hRmn6rwd1+WKLpVrPY109bxSLAZaZAAAAAElFTkSuQmCC"
              alt="google"
            ></img>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgBvVc9dtswDIbcDh3VGzA3sE9g5wbx1i3JCZKxm+0TtDlBlK2dmpyg2tqtzgnKG1Tdurn4KNBmZEKiJb187+FJIogfAiAJZZQIY0zOjwumOdMUQ0y5sCumLZNlemIqrbVVit6sawIbNvy4YboKDKagYNqwI5b6OCArXjHd0jCs2YcNneKArPo71WEeA5bpPBaNCR0bn45s3KmFTlnYC2QN424ijWs8hKVGJN4ExpHzHw3jqOyfTO/otAIEsAu+iJyXxXOR5/nXqqr+YSBMwYqOV44qXjKd8fu1rMArh3Ol0FbGSOZcs8x7Jsg0CxAp3he2S4GE/jcdY8ZKtv7D51DbWlI/NjwDWnSfYeJb+VjFFGZZ9if87trTobMBtNQhCrcTyf1VbMZut5vRcEyV8UvYRg1cKBMs1fkdikc61E4IV5BwYK4IblLP8zaIjjuF7RyYKoIFjYdCGZ/DARNhbGlESBRshOVqIFalg0OfCDPRGPRKgAOx1RrZnqNAdJkIy8IBq8hp+7cPFsq4c+BZYa5oPNwo489woFSYCw7dJQ0E64DxhcIu4QBOKq3qC1bQOxJi/LPChs3S34aY5MOE6xPnwCc6FI6l+jQrlQvHG0SxoXZwuuKyaSvkAte134ahlz7sMzocSEYc+sVG7luUfqO6o1pTdwPj+gTngFyzm8DYvShAQ9FMz12X0gTs2/V9S8ZtElb7QQyjBctwH6B94ve/VKfhgcceNa08F85+pHbA9tJ/dDWls7acx8Aqdi1sS42mNIsoMA0nUB9PImxYtqR+DliK/Buc/GPC8lkPBxDFZdKPiRix0gmnFlUboONc6ycnbZIss+YHHHmQoZRruhLCbkHnux6js3KHTMoNmTrP4z/vuvnFd2l5jAAAAABJRU5ErkJggg=="
              alt="github"
            ></img>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB7ZdfbtNAEMa/mS2QhoeGG/gG5ARJfIKmN0gkCLwVTtD2BG3eSgrCnIDkBHbDBcINcoS8NFQC7zA2KU3stHIl/3nJT7JWO7Or/TQez3gJSn0w7QJyAlATpSAzEhreXLU8qr2d9pjwFZUQHjETHaMiRMwx69B8wLuInwIhQofTZplbG7rLq/ar6BHgIwokJcBa27/97AZ381+j1oWKOkNJAhbrh/8XxdZDSQK2YkI0UBBJAY39wfRDcpGwKexL2UsaCDivD34c/BaeGLENw3Iogh4KgrQKCiokUw4UyV7aJDOtELMNi0iHQM5qNld/sOG3cKKiEhcuwtCKnUd2Ju5oeNv3ezMJwGT5qXW6bqgPrj0dnHiih6u/v+6P+4nIz2cv7eniwl2vnl7tve/AmnPNrS4yCng6JgxuLl1vm+v20p3rcLT/buqTaJQS5JIDq0MeRSjsb7PnEwGl1vMdfmFO9JNtEMJvy5E7RkKkRiFIRiGXCESH03PjQ+vFv3dtvtfe+J3kOhK5TtpyEcDGNOkuSVcY4m6mvcgBy+leIUwHGbZWX4h2AnYCdgJSPyRaSgOiVMU6vL+2SdSqJxt7QK/T3W7LOqF23LYfE1A2LIQAVSEyY/oTDlEVRGe8/OKOraC/emelEOVZfP0btcZ/AWMIvAqMVS1WAAAAAElFTkSuQmCC"
              alt="linkedin"
            ></img>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="bg-gray-300 w-full h-[2px]"></div>
            <h3 className=" text-nowrap text-lg text-gray-700">
              Or sign up with your email
            </h3>
            <div className="bg-gray-300 w-full h-[2px]"></div>
          </div>
          <form className="flex flex-col gap-3 items-start pt-5">
            <div className="w-[90%]">
              <h2 className="text-lg text-gray-700 py-2">First Name</h2>
              <input type="text" className="input-border" />
            </div>
            <div className="w-[90%]">
              <h2 className="text-lg text-gray-700 py-2">Last Name</h2>
              <input type="text" className="input-border" />
            </div>
            <div className="w-[90%]">
              <h2 className="text-lg text-gray-700 py-2">Email</h2>
              <input type="text" className="input-border" />
            </div>
            <div className="w-[90%]">
              <h2 className="text-lg text-gray-700 py-2">Password</h2>
              <input type="text" className="input-border" />
            </div>
            <button className="w-[90%] mt-6 text-center px-8 py-3 rounded-md text-white bg-deep-blue font-normal text-lg">
              Sign Up
            </button>

          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
