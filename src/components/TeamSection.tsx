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
        <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Команда</h2>
        <p className="text-center text-muted-foreground mb-16">Профессионалы своего дела</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={48} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gold mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
