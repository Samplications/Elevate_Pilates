import React, { useState, useEffect, use } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import emailjs from '@emailjs/browser';

import workshop1Img from "../assets/workshops/8thAugust.webp";
import workshop2Img from "../assets/workshops/29thAugust.webp";
import workshop3Img from "../assets/workshops/19thSeptember.webp";
import workshop4Img from "../assets/workshops/17thOctober.webp";
import workshop5Img from "../assets/workshops/14thNovember.webp";
import workshop6Img from "../assets/workshops/5thDecember.webp";

// const stripePromise = loadStripe('pk_live_51To8QtE6CvSzgu1PoEgwTueIkqM8HHSRsfAuytJWJkug6sSYX2n7bfuUeqDroGVTfa5RQuiS7sgqdYg6gJLAvn4g00hfIjw515');

const PageDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr
  overflow-x: hidden;
  justify-items: center;
`;

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr
  justify-items: center;
  gap:1em;
  width: 100%;
  max-width: 1600px;
  padding: clamp(1em, 3vw, 4em); clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr
  justify-items: center;
  gap:1em;
  width: 100%;

  margin-bottom: 2em;
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 0;
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 500;
`;

const FAQOuterCard = styled.div`
  background-color: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  background: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: clamp(1em, 3vw, 2em);
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1em;
  justify-content: space-between;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const CardInnerModal = styled(CardInner)`
  grid-template-columns: 1fr;
`;

const ImgDiv = styled.img`
    width: 100%;
    height: auto;
    border-radius: 25px;
`;

const DateTxt = styled.p`
    color: var(--c-secondary);
    padding:0;
    margin:0;
    font-weight:bold;
`

const RegisterButton = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 0.8rem;
  margin-top:1.5em;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75em;
  margin-bottom: 1em;
  border: 1px solid;
  border-color:var(--c-secondary);
  border-radius: 8px;
  font-size: 1em;
  box-sizing: border-box;
  background-color: var(--c-primary);
  color: var(--c-grey);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: #333;
`;

// // --- Stripe Checkout Form ---
// const CheckoutForm = ({ amount, workshopName, onSuccess, onCancel }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);

//     if (!stripe || !elements) {
//       return;
//     }

//     if (!formData.firstName || !formData.lastName || !formData.email) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);

//     const { error: submitError } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: 'https://www.elevate-pilates.de/booking-success',
//         payment_method_data: {
//           billing_details: {
//             name: `${formData.firstName} ${formData.lastName}`,
//             email: formData.email,
//           },
//         },
//       },
//     });

//     // If we reach here without a redirect, something went wrong
//     // (e.g. an immediately-actionable error like a declined card)
//     if (submitError) {
//       setError(submitError.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
//       <h3>Book "{workshopName}"</h3>
//       <p>Price: €{amount}</p>

//       <FormLabel>First Name</FormLabel>
//       <FormInput
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleInputChange}
//         required
//       />

//       <FormLabel>Last Name</FormLabel>
//       <FormInput
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleInputChange}
//         required
//       />

//       <FormLabel>Email</FormLabel>
//       <FormInput
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         required
//       />

//       <FormLabel>Payment Details</FormLabel>
//       <PaymentElement />

//       {error && <p style={{ color: 'red', margin: '1em 0' }}>{error}</p>}

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
//         <RegisterButton type="button" onClick={onCancel} style={{ backgroundColor: '#ccc' }}>
//           Cancel
//         </RegisterButton>
//         <RegisterButton type="submit" disabled={!stripe || loading}>
//           {loading ? 'Processing...' : 'Zahlen'}
//         </RegisterButton>
//       </div>
//     </form>
//   );
// };


const CheckoutForm = ({ amount, workshopName, workshopDate, workshopPrice, onSuccess, onCancel }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Construct the email message
      const message = `
** English Below ** <br>
<br>
Hi ${formData.firstName},<br>
<br>
Vielen Dank für dein Interesse am <b>${workshopName}</b> am <b><u>${workshopDate}</u></b> für €${workshopPrice}. Deine Anfrage ist mit folgenden Daten hinterlegt:<br>
Vorname ~ ${formData.firstName}<br>
Nachname ~ ${formData.lastName}<br>
Email ~ ${formData.email}<br>
Telefonnummer ~ "${formData.tel}"<br>
<br>
Bitte beachte, dass deine Anfrage erst nach unserer Bestätigung weiterverarbeitet werden kann, um deine Registrierung erfolgreich abzuschließen.<br>
<br>
Liebe Grüße<br>
Julia<br>
<i>Gründerin Elevate Pilates</i>

<br>
---------------------<br>
<br>
Hi ${formData.firstName},<br>
<br>
Thank you for your interest in <b>${workshopName}</b> on <b><u>${workshopDate}</u></b> for €${workshopPrice} using the following details:<br>
First Name ~ ${formData.firstName}<br>
Last Name ~ ${formData.lastName}<br>
Email ~ ${formData.email}<br>
Phone Number ~ "${formData.tel}"<br>
<br>
Please be aware your registration is only valid once you receive a confirmation from us.<br>
<br>
Lovely Regards<br>
Julia<br>
<i>Founder Elevate Pilates</i>
      `.trim();

      // Send email using emailjs
      await emailjs.send(
        'service_utj4chp',
        'template_uqol1mj', // TODO set back
        {
          user_name: formData.firstName,
          user_email: formData.email,
          message: message,
          admin_email: "elevate-pilates@outlook.com",
          title: "Elevate Pilates - Deine Anmeldung zum Workshop"
        },
        'kOvmC5bVWZLywIJxx'
      );

      onSuccess();
    } catch (err) {
      setError('Anmeldung Fehlgeschlagen. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3>Anmeldung für <br/>"{workshopName}"</h3>
      <p>Preis: €{amount}</p>

      <FormLabel>Vorname</FormLabel>
      <FormInput
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />

      <FormLabel>Nachname</FormLabel>
      <FormInput
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />

      <FormLabel>Email</FormLabel>
      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <FormLabel>Telefonnr. (optional)</FormLabel>
      <FormInput
        type="tel"
        name="tel"
        value={formData.tel}
        onChange={handleInputChange}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
        <RegisterButton type="button" onClick={onCancel} style={{ backgroundColor: '#ccc', padding: '8px 16px' }}>
          Cancel
        </RegisterButton>
        <RegisterButton type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
          {loading ? 'Processing...' : 'Anmelden'}
        </RegisterButton>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

// --- Modal Component ---
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          padding: '0.5em',
          borderRadius: 'clamp(25px, 5vw, 55px)',
          maxWidth: '500px',
          maxHeight: '90%',
          overflowY: 'auto', // Makes content scroll when too tall
          width: '90%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardInnerModal>
          {children}
        </CardInnerModal>
      </div>
    </div>
  );
};

// --- Main ---
const WorkshopPage = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  //const [clientSecret, setClientSecret] = useState(null);        // for stripe
  // const [intentError, setIntentError] = useState(null);      // for stripe
  // const [intentLoading, setIntentLoading] = useState(false); // For stripe

  const workshops = [
    { id: 1, title: 'Workshop 1: The Foundation', subtitle: 'Ideal für Einsteiger', date: '08.08.2026 11:30', price: 65, description: 'In dem ersten Part der <i>Elevate Series</i> lernst du die essenziellen Grundlagen des Pilates kennen und entwickelst ein solides Fundament für deine weitere Praxis – in deiner nächsten Class oder zu Hause. Gemeinsam legen wir die Basis – von der Atmung über die Aktivierung deines Powerhouses bis hin zu den Foundations der Contrology.', image: workshop1Img },
    { id: 2, title: 'Workshop 2: Stability & Balance', subtitle: 'Für alle Levels', date: '29.08.2026 11:30', price: 65, description: 'Gemeinsam erarbeiten wir mit ausgewählten Übungen deine Stabilität und Balance auf der Matte. Finde Kraft aus deiner tiefen Mitte und lerne, wie du sie gemeinsam mit deiner Atmung für eine kontrollierte Ausführung der Übungen nutzen kannst.', image: workshop2Img },
    { id: 3, title: 'Workshop 3: Core & Pelvic Floor', subtitle: 'Für alle Levels', date: '19.09.2026 11:30', price: 65, description: 'Unser Powerhouse und Beckenboden arbeiten enger zusammen, als dir vielleicht bewusst ist. Im Einklang mit unserer Atmung können wir unseren Beckenboden stabilisieren, mobilisieren und stärken – für kontrolliertere Bewegung und einen nachhaltig gesunden Körper.', image: workshop3Img },
    { id: 4, title: 'Workshop 4: Mobility & Flexibility', subtitle: 'Für alle Levels', date: '17.10.2026 11:30', price: 65, description: 'In diesem Part entwickeln wir ein noch feineres Körpergefühl und arbeiten gezielt an der Mobilität deiner Gelenke sowie deiner Flexibilität. Erlerne, wie du deine Hüfte, Beine oder Wirbelsäule gezielt mobilisieren und deine Flexibilität erweitern kannst – unabhängig davon, ob du noch ganz am Anfang stehst oder deine bisherigen Fähigkeiten ausbauen möchtest.', image: workshop4Img },
    { id: 5, title: 'Workshop 5: Alignment & Refinement', subtitle: 'Für alle Levels', date: '14.11.2026 11:30', price: 65, description: 'Ganz nach dem Prinzip: Qualität vor Quantität. Anhand ausgewählter Übungen entwickelst du eine noch präzisere Mind-Muscle-Connection sowie ein feineres Körpergefühl und mehr Kontrolle über deine Bewegungen.', image: workshop5Img },
    { id: 6, title: 'Workshop 6: Advancing on the Mat', subtitle: 'Ideal für Erfahrene & Fortgeschrittene', date: '05.12.2026 11:30', price: 65, description: 'Im letzten Part der <i>Elevate Series</i> ist deine Gelegenheit, deine Skills auf der Matte auf das nächste Level zu bringen. Eventuell hast du dich bisher nicht getraut oder wusstest nicht genau, wie du sicher und kontrolliert den Schwierigkeitsgrad einer Übung erhöhst. Mit meiner Unterstützung gewinnst du das nötige Vertrauen und die Technik, um anspruchsvollere Übungen sicher und kontrolliert auszuführen.', image: workshop6Img },
  ];

  const handleRegister = async (workshop) => {
    setSelectedWorkshop(workshop);
    setClientSecret(null);
    setIntentError(null);
    setIntentLoading(true);

    // try {
    //   const response = await fetch('http://localhost:4242/api/create-payment-intent', { //TODO
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       amount: workshop.price * 100, // cents
    //       workshopName: workshop.title,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Could not start checkout. Please try again.');
    //   }

    //   const { clientSecret } = await response.json();
    //   setClientSecret(clientSecret);
    // } catch (err) {
    //   setIntentError(err.message);
    // } finally {
    //   setIntentLoading(false);
    // }
  };

  const handleCloseModal = () => {
    setSelectedWorkshop(null);
    setClientSecret(null);
    setIntentError(null);
  };

  const handleBookingSuccess = () => {
    alert('Anfrage erfolgreich abgesendet!');
    handleCloseModal();
  };

  return (
    <>
      <Helmet>
        <title>Pilates Workshops in Darmstadt | Elevate Pilates</title>
        <meta name="description" content="Entdecke die Pilates Workshops von Elevate Pilates in Darmstadt. Von Anfängern bis zu Fortgeschrittenen – unsere Workshops decken Grundlagen, Feinheiten und fortgeschrittene Techniken ab. Jetzt anmelden!" />
        <meta name="keywords" content="Pilates, Darmstadt, Workshops, Elevate Pilates, Matten-Pilates, Anfänger, Fortgeschrittene, Fitness, Gesundheit" />
        <meta property="og:title" content="Pilates Workshops in Darmstadt | Elevate Pilates" />
        <meta property="og:description" content="Entdecke die Pilates Workshops von Elevate Pilates in Darmstadt. Von Anfängern bis zu Fortgeschrittenen – jetzt anmelden!" />
        <meta property="og:url" content="https://www.elevate-pilates.de/workshops" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pilates Workshops in Darmstadt | Elevate Pilates" />
        <meta name="twitter:description" content="Entdecke die Pilates Workshops von Elevate Pilates in Darmstadt. Von Anfängern bis zu Fortgeschrittenen – jetzt anmelden!" />
        <link rel="canonical" href="https://www.elevate-pilates.de/workshops" />
      </Helmet>

      <PageDiv>
        <ContainerDiv>
          <div>
            <SectionTitle>
              <ElevateSpan>Elevate</ElevateSpan> Series
            </SectionTitle>

            <CardDiv>
              {workshops.map((workshop) => {
                const workshopDate = new Date(workshop.date.replace(/(\d+)\.(\d+)\.(\d+)/, '$3-$2-$1'));
                const isPastDate = workshopDate < new Date();

                return (
                  <FAQOuterCard key={workshop.id}>
                    <CardInner>
                      <div>
                        <h3>{workshop.title}</h3>
                        <DateTxt>{workshop.subtitle}</DateTxt>
                        <p dangerouslySetInnerHTML={{ __html: workshop.description }} />
                        <RegisterButton
                          onClick={() => !isPastDate && handleRegister(workshop)}
                          disabled={isPastDate}
                        >
                          {isPastDate ? "Vergangen" : `Anmelden für €${workshop.price}`}
                        </RegisterButton>
                      </div>
                      <ImgDiv src={workshop.image} alt={workshop.title} />
                    </CardInner>
                  </FAQOuterCard>
                );
              })}
            </CardDiv>

            <SectionTitle>
              About the <br/><ElevateSpan>Elevate</ElevateSpan> Series
            </SectionTitle>
            <p>
              Die Workshopreihe findet bilingual auf Deutsch und Englisch statt. Jeder Workshop umfasst 2,5 Stunden und findet in einer exklusiven Women-Only-Kleingruppe statt. In einer ruhigen, persönlichen Atmosphäre widmen wir uns intensiv einem Schwerpunktthema, damit du die Pilates-Methode nicht nur ausführst, sondern wirklich verstehst und nachhaltig in deine eigene Praxis integrieren kannst.
<br/><br/>
Zu Beginn jedes Workshops erhältst du ein fundiertes Verständnis der theoretischen Grundlagen und erfährst, welche Ziele die einzelnen Übungen verfolgen und wie du sie sicher sowie kontrolliert ausführst. Anschließend setzen wir das Gelernte in einem harmonischen Flow gemeinsam um. Zum Abschluss hast du ausreichend Zeit, deine offenen Fragen zu stellen – ich beantworte sie dir gerne.
<br/><br/>
Eine kurze Pause ist ebenfalls vorgesehen - kleine Snacks und Getränke stehen für dich bereit 🙂
            </p>
          </div>
        </ContainerDiv>


        


      </PageDiv>

      {/* Stripe Modal */}
      <Modal isOpen={!!selectedWorkshop} onClose={handleCloseModal}>
        {/* {intentLoading && <p>Loading payment form…</p>}
        {intentError && <p style={{ color: 'red' }}>{intentError}</p>} */}
        {/* {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm
              amount={selectedWorkshop?.price}
              workshopName={selectedWorkshop?.title}
              workshopDate={selectedWorkshop?.date}
              workshopPrice={selectedWorkshop?.price}
              onSuccess={handleBookingSuccess}
              onCancel={handleCloseModal}
            />
          </Elements>
        )} */}

        <CheckoutForm
              amount={selectedWorkshop?.price}
              workshopName={selectedWorkshop?.title}
              workshopDate={selectedWorkshop?.date}
              workshopPrice={selectedWorkshop?.price}
              onSuccess={handleBookingSuccess}
              onCancel={handleCloseModal}
            />
      </Modal>
    </>
  )
}

export default WorkshopPage