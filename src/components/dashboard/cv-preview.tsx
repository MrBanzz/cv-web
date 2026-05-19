"use client";

import { Mail, Phone, MapPin, Link, Briefcase, GraduationCap, User } from "lucide-react";

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
}

interface Skill {
  id: string;
  name: string;
  proficiency: string;
}

interface CVPreviewProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
}

const proficiencyColors: Record<string, string> = {
  Beginner: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  Intermediate: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Advanced: "bg-green-500/20 text-green-300 border-green-500/30",
  Expert: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  if (!year) return dateStr;
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = parseInt(month, 10) - 1;
  return monthNames[monthIndex] ? `${monthNames[monthIndex]} ${year}` : dateStr;
}

function isValidLinkedIn(url: string): boolean {
  return url.includes("linkedin.com");
}

export default function CVPreview({ personalInfo, experiences, educations, skills }: CVPreviewProps) {
  const hasPersonalInfo = personalInfo.fullName || personalInfo.email || personalInfo.phone || personalInfo.location || personalInfo.linkedin;
  const hasSummary = personalInfo.summary.trim().length > 0;
  const validExperiences = experiences.filter((exp) => exp.company || exp.position);
  const validEducations = educations.filter((edu) => edu.institution || edu.degree);
  const validSkills = skills.filter((skill) => skill.name);

  if (!hasPersonalInfo && !hasSummary && validExperiences.length === 0 && validEducations.length === 0 && validSkills.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-lg bg-muted/50 p-8">
        <div className="text-center text-muted-foreground">
          <div className="mb-4 text-4xl">📄</div>
          <p className="text-sm">Live preview will appear here</p>
          <p className="mt-1 text-xs">Start filling out the form to see your CV</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white/10 p-6 text-white backdrop-blur-md dark:bg-black/40">
      {/* Header - AC-1: Full Name prominently displayed */}
      {personalInfo.fullName && (
        <h1 className="mb-3 text-2xl font-bold tracking-tight">{personalInfo.fullName}</h1>
      )}

      {/* AC-2: Contact Info */}
      {(personalInfo.email || personalInfo.phone || personalInfo.location || personalInfo.linkedin) && (
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-300">
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="size-3.5 shrink-0" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="size-3.5 shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1.5">
              <Link className="size-3.5 shrink-0" />
              {isValidLinkedIn(personalInfo.linkedin) ? (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>
              ) : (
                <span>LinkedIn Profile</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* AC-3: Summary Section */}
      {hasSummary && (
        <div className="mb-5">
          <h2 className="mb-2 border-b border-white/20 pb-1 text-lg font-semibold">Summary</h2>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-200">{personalInfo.summary}</p>
        </div>
      )}

      {/* AC-4: Experience Section */}
      {validExperiences.length > 0 && (
        <div className="mb-5">
          <h2 className="mb-3 flex items-center gap-2 border-b border-white/20 pb-1 text-lg font-semibold">
            <Briefcase className="size-4" />
            Experience
          </h2>
          <div className="space-y-4">
            {validExperiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-medium">{exp.position}</h3>
                  {(exp.startDate || exp.endDate) && (
                    <span className="text-sm text-gray-400">
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                    </span>
                  )}
                </div>
                {exp.company && <p className="text-sm text-gray-300">{exp.company}</p>}
                {exp.description && (
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-gray-300">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AC-5: Education Section */}
      {validEducations.length > 0 && (
        <div className="mb-5">
          <h2 className="mb-3 flex items-center gap-2 border-b border-white/20 pb-1 text-lg font-semibold">
            <GraduationCap className="size-4" />
            Education
          </h2>
          <div className="space-y-3">
            {validEducations.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-medium">{edu.institution}</h3>
                  {edu.graduationYear && <span className="text-sm text-gray-400">{edu.graduationYear}</span>}
                </div>
                {(edu.degree || edu.fieldOfStudy) && (
                  <p className="text-sm text-gray-300">
                    {[edu.degree, edu.fieldOfStudy].filter(Boolean).join(" in ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AC-6: Skills Section */}
      {validSkills.length > 0 && (
        <div>
          <h2 className="mb-3 flex items-center gap-2 border-b border-white/20 pb-1 text-lg font-semibold">
            <User className="size-4" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {validSkills.map((skill) => (
              <span
                key={skill.id}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  proficiencyColors[skill.proficiency] || proficiencyColors.Intermediate
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
