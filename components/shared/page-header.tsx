import Container from './container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  position?: 'center' | 'left' | 'right' | 'top' | 'bottom';
}

function PageHeader({
  title,
  subtitle,
  position = 'center',
  backgroundImage = '/heros/activity-hero.jpeg',
}: PageHeaderProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
      }}
      className="h-[40vh] bg-center bg-no-repeat">
      <Container className="flex items-center h-full">
        <div className="text-white">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && (
            <span className="text-2xl mt-2 block">{subtitle}</span>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHeader;
