import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from "@sentry/nextjs";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  Sentry.metrics.set("user_view_new-appointemnt", patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="carepulse logo"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type={"create"}
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright py-12">© 2024</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img w-1/2"
      />
    </div>
  );
};

export default NewAppointment;
