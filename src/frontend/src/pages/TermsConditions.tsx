import { ArrowLeft, Globe } from "lucide-react";
import { useState } from "react";
import { useApp } from "../context/AppContext";

const CONTENT = {
  en: {
    title: "Terms & Conditions",
    effective: "Effective Date: March 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing or using Komofast Social, you agree to be bound by these Terms & Conditions. If you do not agree to any part of these terms, you must not use our platform.",
      },
      {
        heading: "2. Account Rules",
        body: "• **Age Requirement** – You must be at least 18 years old to create an account on Komofast Social.\n• **Accurate Information** – You must provide accurate, current, and complete information during registration.\n• **Account Security** – You are responsible for maintaining the confidentiality of your account credentials. Do not share your password with anyone.\n• **One Account Per User** – Creating multiple accounts for deceptive purposes is prohibited.\n• **Account Verification** – We reserve the right to verify your identity at any time.",
      },
      {
        heading: "3. Prohibited Content",
        body: "The following types of content are strictly prohibited on Komofast Social:\n• **Hate Speech** – Content that promotes discrimination, violence, or hatred based on race, religion, gender, nationality, or any other protected characteristic.\n• **Adult/Sexual Content** – Explicit, pornographic, or sexually suggestive content.\n• **Fake News / Misinformation** – Deliberately false or misleading information.\n• **Spam & Scams** – Unsolicited commercial messages, phishing, or fraudulent schemes.\n• **Violence** – Content depicting graphic violence, gore, or threats of harm.\n• **Illegal Content** – Any content that violates Indian law or international laws.\n\nViolations will result in content removal and may lead to account suspension or permanent ban.",
      },
      {
        heading: "4. Intellectual Property",
        body: "• **Your Content** – You retain ownership of the content you create and post on Komofast Social.\n• **Platform License** – By posting content, you grant Komofast Social a non-exclusive, royalty-free, worldwide license to display, distribute, and promote your content within the platform.\n• **Platform Content** – Komofast Social's branding, logos, design, and proprietary features are owned by us and protected by intellectual property laws.\n• **Copyright Violations** – If you believe your copyright has been infringed, contact us at vijayk37427@gmail.com.",
      },
      {
        heading: "5. Account Termination",
        body: "We reserve the right to suspend or permanently terminate accounts that:\n• Violate these Terms & Conditions.\n• Engage in prohibited activities.\n• Pose a risk to other users or the platform.\n• Remain inactive for more than 12 months.\n\nYou may also delete your account at any time by contacting vijayk37427@gmail.com. Upon termination, your data will be deleted within 30 days.",
      },
      {
        heading: "6. Disclaimer of Warranties",
        body: 'Komofast Social is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind. We do not guarantee that:\n• The platform will be uninterrupted or error-free.\n• Content on the platform is accurate, complete, or reliable.\n• The platform is free from viruses or other harmful components.',
      },
      {
        heading: "7. Limitation of Liability",
        body: "To the fullest extent permitted by law, Komofast Social and its operators shall not be liable for:\n• Any indirect, incidental, special, or consequential damages.\n• Loss of data, profits, or business opportunities.\n• Content posted by users or third parties.\n• Unauthorized access to your account due to your negligence.",
      },
      {
        heading: "8. Governing Law (India – IT Act)",
        body: "These Terms & Conditions are governed by and construed in accordance with the laws of India, including:\n• **The Information Technology Act, 2000** and its amendments.\n• **The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**.\n\nAny disputes shall be subject to the exclusive jurisdiction of the courts in India.",
      },
      {
        heading: "9. Changes to Terms",
        body: "We reserve the right to update these Terms & Conditions at any time. We will notify users of significant changes via email or platform notifications. Continued use of the platform after changes constitutes acceptance of the new terms.",
      },
      {
        heading: "10. Contact",
        body: "For any questions about these Terms & Conditions:\n\n📧 Email: vijayk37427@gmail.com\n🕐 Response Time: Within 30 days\n\nKomofast Social, India",
      },
    ],
  },
  hi: {
    title: "नियम और शर्तें",
    effective: "प्रभावी तिथि: मार्च 2026",
    sections: [
      {
        heading: "1. शर्तों की स्वीकृति",
        body: "Komofast Social का उपयोग करके, आप इन नियम और शर्तों से बंधे होने के लिए सहमत हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो आपको हमारे प्लेटफॉर्म का उपयोग नहीं करना चाहिए।",
      },
      {
        heading: "2. खाता नियम",
        body: "• **आयु आवश्यकता** – Komofast Social पर खाता बनाने के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए।\n• **सटीक जानकारी** – पंजीकरण के दौरान सटीक और पूरी जानकारी प्रदान करें।\n• **खाता सुरक्षा** – अपने खाते की जानकारी गोपनीय रखें।\n• **एक उपयोगकर्ता एक खाता** – धोखाधड़ी के उद्देश्य से कई खाते बनाना प्रतिबंधित है।",
      },
      {
        heading: "3. प्रतिबंधित सामग्री",
        body: "निम्नलिखित प्रकार की सामग्री Komofast Social पर सख्त रूप से प्रतिबंधित है:\n• **घृणा भाषण** – जाति, धर्म, लिंग के आधार पर भेदभाव को बढ़ावा देने वाली सामग्री।\n• **वयस्क/यौन सामग्री** – स्पष्ट या यौन सुझाव वाली सामग्री।\n• **फर्जी खबरें** – जानबूझकर झूठी या भ्रामक जानकारी।\n• **स्पैम और घोटाले** – अनचाहे व्यावसायिक संदेश या धोखाधड़ी योजनाएं।\n• **हिंसा** – ग्राफिक हिंसा या नुकसान की धमकियां दिखाने वाली सामग्री।",
      },
      {
        heading: "4. बौद्धिक संपदा",
        body: "• **आपकी सामग्री** – आप Komofast Social पर बनाई और पोस्ट की गई सामग्री के स्वामी बने रहते हैं।\n• **प्लेटफॉर्म लाइसेंस** – सामग्री पोस्ट करके, आप Komofast Social को प्लेटफॉर्म के भीतर सामग्री प्रदर्शित करने का लाइसेंस देते हैं।",
      },
      {
        heading: "5. खाता समाप्ति",
        body: "हम उन खातों को निलंबित या स्थायी रूप से समाप्त करने का अधिकार सुरक्षित रखते हैं जो:\n• इन नियम और शर्तों का उल्लंघन करते हैं।\n• प्रतिबंधित गतिविधियों में संलग्न होते हैं।\n• अन्य उपयोगकर्ताओं के लिए जोखिम पैदा करते हैं।",
      },
      {
        heading: "6. देनदारी की सीमा",
        body: "कानून द्वारा अनुमत सीमा तक, Komofast Social किसी भी अप्रत्यक्ष, आकस्मिक, या परिणामी नुकसान के लिए उत्तरदायी नहीं होगा।",
      },
      {
        heading: "7. शासी कानून (भारत – IT अधिनियम)",
        body: "ये नियम और शर्तें भारत के कानूनों द्वारा शासित हैं, जिनमें शामिल हैं:\n• **सूचना प्रौद्योगिकी अधिनियम, 2000** और इसके संशोधन।\n• **IT (मध्यवर्ती दिशानिर्देश और डिजिटल मीडिया नैतिकता संहिता) नियम, 2021**।\n\nकोई भी विवाद भारत के न्यायालयों के अधिकार क्षेत्र में होगा।",
      },
      {
        heading: "8. संपर्क",
        body: "इन नियम और शर्तों के बारे में किसी भी प्रश्न के लिए:\n\n📧 ईमेल: vijayk37427@gmail.com\n🕐 प्रतिक्रिया समय: 30 दिनों के भीतर",
      },
    ],
  },
};

function renderLine(line: string, idx: number) {
  if (!line) return <br key={`br-${idx}`} />;
  const parts = line.split(/(\*\*[^*]+\*\*)/);
  return (
    <p
      key={`line-${idx}`}
      className="mb-1 text-[14px] leading-relaxed text-white/70"
    >
      {parts.map((p, j) =>
        p.startsWith("**") && p.endsWith("**") ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static content split
          <strong key={j} className="text-white/90">
            {p.slice(2, -2)}
          </strong>
        ) : (
          p
        ),
      )}
    </p>
  );
}

function renderBody(text: string) {
  return text.split("\n").map((line, i) => renderLine(line, i));
}

export default function TermsConditions() {
  const { navigate } = useApp();
  const [lang, setLang] = useState<"en" | "hi">("en");
  const content = CONTENT[lang];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b border-white/10"
        style={{
          background: "rgba(11,15,20,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          type="button"
          data-ocid="terms.back.button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-[14px]">Back</span>
        </button>
        <h1 className="text-[16px] font-bold text-white">{content.title}</h1>
        <button
          type="button"
          data-ocid="terms.lang.toggle"
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#a78bfa",
          }}
        >
          <Globe size={13} />
          {lang === "en" ? "हिंदी" : "English"}
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero */}
        <div
          className="rounded-2xl p-5 mb-6 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.1) 0%, rgba(168,85,247,0.15) 100%)",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div className="text-4xl mb-2">📜</div>
          <h2 className="text-[20px] font-bold text-white mb-1">
            {content.title}
          </h2>
          <p className="text-[12px] text-white/50">{content.effective}</p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {content.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="text-[15px] font-bold text-white mb-2"
                style={{
                  background: "linear-gradient(90deg,#2fa8ff,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {section.heading}
              </h3>
              <div>{renderBody(section.body)}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400/50"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
