import { Metadata } from 'next';
import BreadCrumbs from '../../components/BreadCrumbs';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { HEADER_HEIGHT } from '../../utils/constants';
import { getAbsoluteUrl } from '../api-utils/helpers';

export const metadata: Metadata = {
  title: 'Contact - Rohail Taha',
  description:
    "Get in touch with me through email or through phone. Drop a message here and I'll get back to you.",
  alternates: {
    canonical: getAbsoluteUrl('/contact'),
  },
};

const breadCrumbLinks = [
  { href: '/', name: 'Home' },
  { href: '/contact', name: 'Contact' },
];

function Contact() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }} className="responsive-pad">
        <div className="pt-10 pb-32 mx-auto max-content-w">
          <BreadCrumbs links={breadCrumbLinks} />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
