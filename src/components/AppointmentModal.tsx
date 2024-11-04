"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({
  isOpen,
  onClose,
}: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDoctorChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, doctor: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 3));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#FFF0F5] border-[#E84B1C]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#E84B1C]">
            Book an Appointment
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-[#E84B1C]">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#E84B1C]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#E84B1C]">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="doctor" className="text-[#E84B1C]">
                  Doctor
                </Label>
                <Select
                  onValueChange={handleDoctorChange}
                  value={formData.doctor}
                >
                  <SelectTrigger className="border-[#E84B1C] focus:ring-[#E84B1C]">
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.name} value={doctor.name}>
                        {doctor.name} - {doctor.specialties}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date" className="text-[#E84B1C]">
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-[#E84B1C]">
                  Preferred Time
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="reason" className="text-[#E84B1C]">
                  Reason for Visit
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="border-[#E84B1C] focus:ring-[#E84B1C]"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="border-[#E84B1C] text-[#E84B1C] hover:bg-[#E84B1C] hover:text-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-[#E84B1C] text-white hover:bg-[#E84B1C]/90"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="ml-auto bg-[#E84B1C] text-white hover:bg-[#E84B1C]/90"
              >
                Book Appointment
              </Button>
            )}
          </div>
        </form>

        <div className="mt-4 flex justify-center">
          <span className="text-sm text-[#E84B1C]">Step {step} of 3</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
