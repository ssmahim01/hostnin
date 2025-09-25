"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function MeetOurTeam() {
  const team: TeamMember[] = [
    {
      name: "Imran Mahmud",
      role: "Development Lead",
      image: "/assets/support/1.png",
    },
    {
      name: "Asad Uzzaman",
      role: "Frontend Lead",
      image: "/assets/support/2.png",
    },
    {
      name: "Kamrul Hasan",
      role: "Backend Lead",
      image: "/assets/support/4.png",
    },
    {
      name: "Nur Ahmed Robin",
      role: "Structural Lead",
      image: "/assets/support/5.png",
    },
    {
      name: "Sajjad Ahmed",
      role: "Co-ordinator",
      image: "/assets/support/3.png",
    },
    {
      name: "Tareq Bin Amir",
      role: "Support Core",
      image: "/assets/support/6.png",
    },
    {
      name: "Mujahidul Islam",
      role: "Technology Analyst",
      image: "/assets/support/5.png",
    },
  ];

  return (
    <section className="w-full pt-5 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            MEET OUR TEAM
          </h1>
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-sm tracking-wide uppercase transition-colors duration-200 shadow-lg">
            INSIDE DEVELOPMENT
          </div>
        </div>

        <div className="flex flex-col items-center space-y-0">
          {/* Development Lead at top */}
          <div className="">
            <TeamCard member={team[0]} isLead />
          </div>

          <div className="w-0.5 h-12 bg-blue-500 dark:bg-blue-400 "></div>

          {/* Middle tier - 3 leads with horizontal connecting line */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {team.slice(1, 4).map((member) => (
                <div key={member.name} className="relative">
                  {/* <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div> */}
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-0.5 h-12 bg-blue-500 dark:bg-blue-400 "></div>

          {/* Bottom tier - 3 support roles with horizontal connecting line */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {team.slice(4).map((member) => (
                <div key={member.name} className="relative">
                  {/* <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div> */}
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  isLead = false,
}: {
  member: TeamMember;
  isLead?: boolean;
}) {
  return (
    <Card
      className={`
        ${
          isLead
            ? "w-96 py-4 border-2 border-blue-500 shadow-xl bg-white dark:bg-slate-800"
            : "w-64 p-0 border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800"
        } 
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden
      `}
    >
      <CardContent className="flex flex-col items-center p-5">
        <div className="relative mb-6">
          <Avatar className="h-24 w-24 ring-4 ring-blue-100 dark:ring-blue-900 shadow-lg">
            <AvatarImage
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {isLead && (
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10"></div>
          )}
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {member.name.toUpperCase()}
          </h3>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 tracking-wide">
            {member.role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
