import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ display: 'none' }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta property="og:site_name" content="HI-TECH CLOUD" />
        <meta property="fb:admins" content="https://www.facebook.com/Anthanh78" />
        <meta property="og:image" content="https://assets.datamation.com/uploads/2023/12/dm_20231220-cloud-service-providers.png" />
        <meta property="og:image:secure_url" content="https://assets.datamation.com/uploads/2023/12/dm_20231220-cloud-service-providers.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="hosting" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content="2023-03-25T14:11:47+07:00" />
        <meta property="article:modified_time" content="2024-11-18T10:46:42+07:00" />
        <meta name="keywords" content="Pho Tue SoftWare Solutions JSC," />
        <meta name="description" content="Nhà Cung cấp dịch Trung Tâm Dữ Liệu, Điện Toán Đám Mây Và Phát Triển Phần Mềm Hàng Đầu Việt Nam. Hệ Thống Data Center Đáp Ứng Mọi Nhu Cầu Với Kết Nối Internet Nhanh, Băng Thông Lớn, Uptime Lên Đến 99,99% Theo Tiêu Chua TIER III-TIA 942." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
