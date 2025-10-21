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
    <section id="reviews" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">Отзывы</h2>
        <p className="text-center text-orange mb-16">Что говорят наши клиенты</p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-orange/20 bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-orange fill-orange" />
                ))}
              </div>
              <p className="text-orange/80 mb-6 italic">"{review.text}"</p>
              <p className="font-semibold text-white">{review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;