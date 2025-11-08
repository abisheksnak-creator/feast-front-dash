import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Building, Hash, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Details = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    contact: "",
  });
  const [saved, setSaved] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (Object.values(formData).some((field) => !field)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setSaved(true);
    toast({
      title: "Details Saved!",
      description: "Your information has been saved successfully.",
    });

    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-warm bg-clip-text text-transparent">
            My Details
          </h1>
          <p className="text-muted-foreground">Update your personal information</p>
        </div>

        <Card className="bg-gradient-card border-border shadow-card animate-scale-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
                <p className="text-sm text-muted-foreground">Keep your details up to date</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rollNo" className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Roll Number
              </Label>
              <Input
                id="rollNo"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter your roll number"
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Department
              </Label>
              <Input
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department"
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Number
              </Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                type="tel"
                className="border-border"
              />
            </div>

            <Button
              className="w-full bg-gradient-warm text-lg py-6 hover:opacity-90"
              onClick={handleSave}
            >
              {saved ? (
                <>
                  <CheckCircle className="mr-2 w-5 h-5 animate-scale-in" />
                  Saved Successfully!
                </>
              ) : (
                "Save Details"
              )}
            </Button>

            {formData.name && (
              <Card className="bg-secondary/50 border-secondary animate-scale-in">
                <CardContent className="pt-6">
                  <h4 className="font-bold mb-3 text-foreground">Preview</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Name:</span>{" "}
                      <span className="font-medium">{formData.name || "-"}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Roll No:</span>{" "}
                      <span className="font-medium">{formData.rollNo || "-"}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Department:</span>{" "}
                      <span className="font-medium">{formData.department || "-"}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Contact:</span>{" "}
                      <span className="font-medium">{formData.contact || "-"}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Details;
