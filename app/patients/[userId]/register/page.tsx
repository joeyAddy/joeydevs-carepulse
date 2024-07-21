import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import React from "react";

import * as Sentry from "@sentry/nextjs";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  // Add a user to a set
  // used for tracking the number of users that viewed a page.
  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="carepulse logo"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        width={1000}
        height={1000}
        alt="doctors"
        className="side-img w-[390px]"
      />
    </div>
  );
};

export default Register;
