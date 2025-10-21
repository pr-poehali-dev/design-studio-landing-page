import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

const TeamSection = ({ team }: TeamSectionProps) => {
  return (
    <section id="team" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">Команда</h2>
        <p className="text-center text-orange mb-16">Профессионалы своего дела</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-orange/20 bg-card">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={48} className="text-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-orange mb-2">{member.role}</p>
              <p className="text-sm text-orange/80">{member.experience}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;