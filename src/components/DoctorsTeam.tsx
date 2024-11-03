"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const doctors = [
  {
    name: "Dr. Y. Achamamba",
    qualifications: "MBBS, MD, Neuro Physician",
    specialties: "Managing Director",
  },
  {
    name: "Dr. Sanjeev Kumar",
    qualifications: "MBBS, MD - Medicine, DM - Cardiology",
    specialties: "Cardiologist, Interventional Cardiologist",
  },
  {
    name: "Dr. R Chandrasekhar Naidu",
    qualifications: "MBBS, MS - General Surgery, MCh - Neuro Surgery",
    specialties: "Neurosurgeon, Spine Surgeon (Neuro)",
  },
  {
    name: "Dr. Vasanth Kumar",
    qualifications: "MBBS",
    specialties: "General Physician & Diabetic",
  },
  {
    name: "Dr. Ranjith Kumar Kota",
    qualifications: "MBBS, MS - General Surgery",
    specialties: "General Surgeon",
  },
  {
    name: "Dr. Archana A",
    qualifications: "MBBS, MD - Pulmonary Medicine",
    specialties: "Pulmonologist",
  },
  {
    name: "Dr. Ashwin Kumar Talla",
    qualifications: "MBBS, MD - Orthopedic",
    specialties: "Orthopedic and Joint Replacement Surgeon",
  },
];

export default function DoctorsTeam() {
  return (
    <section className="bg-[#FFF0F5] py-12 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Updated background color */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#E84B1C] text-center mb-12">
          {" "}
          {/* Updated heading color */}
          Our Expert Medical Team
        </h2>

        {/* Responsive Grid with Centered Last Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {doctors.slice(0, -1).map((doctor, index) => (
            <Card
              key={index}
              className="w-full max-w-sm p-6 border border-gray-200 shadow-lg transition-transform hover:scale-105" // Kept original styles
            >
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-4 bg-[#E84B1C] text-white">
                  {" "}
                  {/* Avatar color matches theme */}
                  <AvatarFallback>
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {doctor.qualifications}
                </p>
                <p className="text-sm font-semibold text-[#E84B1C]">
                  {doctor.specialties}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Render the last doctor card separately and centered */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
            <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-4 bg-[#E84B1C] text-white">
                  {" "}
                  {/* Avatar color matches theme */}
                  <AvatarFallback>
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {doctors[doctors.length - 1].name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {doctors[doctors.length - 1].qualifications}
                </p>
                <p className="text-sm font-semibold text-[#E84B1C]">
                  {doctors[doctors.length - 1].specialties}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
