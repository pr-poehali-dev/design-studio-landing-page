import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface CalculatorSectionProps {
  area: number;
  setArea: (value: number) => void;
  roomType: string;
  setRoomType: (value: string) => void;
  repairType: string;
  setRepairType: (value: string) => void;
  calculatePrice: () => number;
}

const CalculatorSection = ({ 
  area, 
  setArea, 
  roomType, 
  setRoomType, 
  repairType, 
  setRepairType, 
  calculatePrice 
}: CalculatorSectionProps) => {
  return (
    <section id="calculator" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Калькулятор стоимости</h2>
        <p className="text-center text-muted-foreground mb-12">Рассчитайте предварительную стоимость ремонта</p>
        <Card className="p-8 shadow-2xl border-none">
          <div className="space-y-8">
            <div>
              <Label className="text-base mb-4 block">Площадь помещения: {area} м²</Label>
              <Slider
                value={[area]}
                onValueChange={(value) => setArea(value[0])}
                min={20}
                max={300}
                step={5}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>20 м²</span>
                <span>300 м²</span>
              </div>
            </div>

            <div>
              <Label className="text-base mb-3 block">Тип помещения</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Квартира</SelectItem>
                  <SelectItem value="house">Дом</SelectItem>
                  <SelectItem value="office">Офис</SelectItem>
                  <SelectItem value="commercial">Коммерческое помещение</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base mb-3 block">Тип ремонта</Label>
              <Select value={repairType} onValueChange={setRepairType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cosmetic">Косметический</SelectItem>
                  <SelectItem value="standard">Стандартный</SelectItem>
                  <SelectItem value="premium">Премиум</SelectItem>
                  <SelectItem value="luxury">Люкс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-6 border-t">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость:</p>
                <p className="text-4xl font-bold text-gold mb-6">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold" size="lg">
                  Получить точный расчёт
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorSection;
