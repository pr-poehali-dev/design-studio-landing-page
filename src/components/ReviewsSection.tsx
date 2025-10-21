import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  text: string;
  rating: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="py-20 px-6 bg-latte">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Отзывы</h2>
        <p className="text-center text-muted-foreground mb-16">Что говорят наши клиенты</p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
              <p className="font-semibold text-charcoal">{review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
