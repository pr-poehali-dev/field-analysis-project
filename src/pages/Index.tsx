import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState<string>('');
  const [yield_per_ha, setYieldPerHa] = useState<string>('');
  const [calculationResult, setCalculationResult] = useState<any>(null);

  const calculateROI = () => {
    const areaNum = parseFloat(area) || 0;
    const yieldNum = parseFloat(yield_per_ha) || 0;

    if (areaNum <= 0 || yieldNum <= 0) return;

    const totalYield = areaNum * yieldNum;
    const gradeImprovement = 0.15;
    const pricePerTon = 80000;
    const additionalIncome = totalYield * gradeImprovement * pricePerTon;
    const cleaningCostSaving = totalYield * 0.3 * 5000;
    const totalAnnualBenefit = additionalIncome + cleaningCostSaving;
    const equipmentCost = 45000000;
    const paybackMonths = Math.round((equipmentCost / totalAnnualBenefit) * 12);

    setCalculationResult({
      totalYield,
      additionalIncome,
      cleaningCostSaving,
      totalAnnualBenefit,
      paybackMonths
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F0] to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/6f7912fc-0afd-4c1d-8391-aef294701cf9/files/807a8796-cdc5-41e8-8b9d-24dfc9c44b2c.jpg" 
            alt="Комбайн ЖАНИБЕК" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Поднимите сортность урожая<br />и получите карту поля
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto font-semibold">
            Прицеп-перегрузчик «ЖАНИБЕК» очищает зерно от сорняков и почвы в потоке<br />
            и считает урожайность для вашего агрохолдинга
          </h2>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 hover-scale">
            Скачать каталог с расчетом окупаемости
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Проблема</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="TrendingDown" size={32} className="text-destructive" />
                </div>
                <CardTitle className="text-center text-2xl">Потеря дохода</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-lg">
                  Элеватор снижает класс из-за сорняков в ворохе — вы теряете 10-15% стоимости
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Truck" size={32} className="text-destructive" />
                </div>
                <CardTitle className="text-center text-2xl">Оплата за мусор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-lg">
                  Вы платите за транспортировку и очистку того, что можно было отсеять в поле
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="HelpCircle" size={32} className="text-destructive" />
                </div>
                <CardTitle className="text-center text-2xl">Планируете вслепую</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-lg">
                  Нет точных данных по влажности и урожайности с каждого участка
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">Решение</h2>
          <p className="text-2xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Первая очистка и аналитика в одном прицепе
          </p>
          
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
                <img 
                  src="https://cdn.poehali.dev/projects/6f7912fc-0afd-4c1d-8391-aef294701cf9/files/0d3f7417-9be6-4f56-99ff-e76f6356239e.jpg" 
                  alt="Чистое зерно" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-xl font-bold p-6">Зерно премиум-качества после очистки</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
                <img 
                  src="https://cdn.poehali.dev/projects/6f7912fc-0afd-4c1d-8391-aef294701cf9/files/bec9e5db-df77-42ea-b2ad-3928b55d7237.jpg" 
                  alt="Цифровая аналитика" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-xl font-bold p-6">Карта урожайности в реальном времени</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover-scale">
                <Icon name="Wheat" size={48} className="text-primary mx-auto mb-4" />
                <p className="font-semibold">Зерно поступает</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover-scale">
                <Icon name="Filter" size={48} className="text-primary mx-auto mb-4" />
                <p className="font-semibold">Система отсеивает сорняки</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover-scale">
                <Icon name="Gauge" size={48} className="text-primary mx-auto mb-4" />
                <p className="font-semibold">Датчики считают урожайность</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover-scale">
                <Icon name="Map" size={48} className="text-primary mx-auto mb-4" />
                <p className="font-semibold">Карта поля в кабинете</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 border-primary/20 hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-center text-xl">+1 класс к урожаю</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  За счет чистоты вороха
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="DollarSign" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-center text-xl">Экономия до 30%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  На затратах на последующую очистку
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-center text-xl">Точная карта урожайности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Для расчета рентабельности каждого поля
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Wrench" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-center text-xl">Ремонт в Казахстане</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Усиленная конструкция и сервисные центры
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">Калькулятор окупаемости</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Рассчитайте экономическую эффективность для вашего хозяйства
          </p>
          
          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Введите параметры</CardTitle>
              <CardDescription>Укажите площадь посевов и среднюю урожайность</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Площадь посевов (га)</label>
                <Input 
                  type="number" 
                  placeholder="Например: 5000"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Средняя урожайность (т/га)</label>
                <Input 
                  type="number" 
                  placeholder="Например: 2.5"
                  value={yield_per_ha}
                  onChange={(e) => setYieldPerHa(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <Button 
                onClick={calculateROI} 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6"
              >
                Рассчитать окупаемость
              </Button>

              {calculationResult && (
                <div className="mt-8 p-6 bg-primary/5 rounded-lg space-y-4 animate-fade-in">
                  <h3 className="text-2xl font-bold text-primary mb-4">Результаты расчета</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Общий урожай</p>
                      <p className="text-2xl font-bold text-primary">{calculationResult.totalYield.toLocaleString()} т</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Дополнительный доход</p>
                      <p className="text-2xl font-bold text-accent">{calculationResult.additionalIncome.toLocaleString()} ₸</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Экономия на очистке</p>
                      <p className="text-2xl font-bold text-accent">{calculationResult.cleaningCostSaving.toLocaleString()} ₸</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Годовая выгода</p>
                      <p className="text-2xl font-bold text-primary">{calculationResult.totalAnnualBenefit.toLocaleString()} ₸</p>
                    </div>
                  </div>

                  <div className="bg-accent/20 p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold text-primary mb-2">Срок окупаемости</p>
                    <p className="text-4xl font-bold text-accent">{calculationResult.paybackMonths} месяцев</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Доказательства</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">До 15%</div>
              <p className="text-xl text-muted-foreground">Рост сортности</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">1-2 сезона</div>
              <p className="text-xl text-muted-foreground">Окупаемость</p>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto bg-primary/5 border-none shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Quote" size={48} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xl text-foreground mb-4 italic">
                    «После «ЖАНИБЕКа» получили премию за 3-й класс пшеницы вместо 4-го. 
                    Экономия — десятки миллионов тенге»
                  </p>
                  <p className="text-muted-foreground font-semibold">
                    Директор по производству, ТОО «Агро-Алтын»
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Вопрос-Ответ</h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Это сложно для комбайнеров?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Нет. Он работает автоматически. Обучение — 1 день.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                А если сломается в разгар уборки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Сервисные бригады в регионах. Среднее время выезда — 24 часа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Почему не купить отдельно датчики?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                «ЖАНИБЕК» — это готовая система с одной гарантией. Вы экономите время на интеграции.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/6f7912fc-0afd-4c1d-8391-aef294701cf9/files/12f6219d-07af-497b-b90a-58edc53c1628.jpg" 
            alt="Поля Казахстана" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Первым 10 клиентам — годовая подписка на агроаналитику Digital Agro в подарок
            </h2>
            <p className="text-xl opacity-90">Стоимость подарка: 450 000 ₸</p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Скачать каталог и получить расчет</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" className="text-lg" />
              <Input placeholder="Телефон" type="tel" className="text-lg" />
              <Input placeholder="E-mail" type="email" className="text-lg" />
              <Input placeholder="Площадь посевов (га)" type="number" className="text-lg" />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6">
                Получить каталог
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">ЖАНИБЕК</h3>
          <p className="text-lg opacity-80 mb-6">Прицеп-перегрузчик для агрохолдингов Казахстана</p>
          <div className="flex justify-center gap-8 text-sm opacity-70">
            <p>Нур-Султан</p>
            <p>Алматы</p>
            <p>+7 (XXX) XXX-XX-XX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;