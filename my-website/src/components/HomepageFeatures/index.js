import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const sections = [
  {title: 'Понять проект', to: '/docs/product/concept-and-boundaries', text: 'Проблема, участники, ценность продукта и границы MVP.'},
  {title: 'Изучить решение', to: '/docs/artifact-map', text: 'Маршрут от требований и сценариев к процессам, моделям данных и интеграциям.'},
  {title: 'Открыть контракты', to: '/api/openapi', text: 'REST API в OpenAPI. События WebSocket и AsyncAPI доступны в разделе интеграций.'},
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features} aria-label="Разделы документации">
      <div className="container">
        <div className="row">
          {sections.map(({title, to, text}) => (
            <div className="col col--4 margin-bottom--lg" key={to}>
              <Heading as="h2"><Link to={to}>{title}</Link></Heading>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
