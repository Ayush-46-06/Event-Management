import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer1 from "../pages/Footer1";
import Navbar from "./Navbar";

const events = [
  {
    id: 1,
    title: "Global Tech Innovation Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    description:
      "Join industry leaders and innovators for a transformative day exploring the future of technology and business. Discover cutting-edge solutions, network with C-suite executives, and gain insights into digital transformation strategies that will shape the next decade.",
    schedule: [
      "9:00 AM - Registration & Welcome Coffee",
      "10:00 AM - Keynote: The Future of AI in Business",
      "12:00 PM - Networking Lunch & Exhibition",
      "2:00 PM - Panel Discussion: Digital Transformation",
      "4:00 PM - Workshops & Breakout Sessions",
      "5:30 PM - Closing Remarks & Cocktail Reception",
    ],
    speakers: [
      {
        name: "Dr. Sarah Chen",
        role: "CEO, TechVision Global",
        bio: "Pioneer in AI innovation with 20+ years experience",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
      },
      {
        name: "Michael Roberts",
        role: "CTO, FutureCorp",
        bio: "Leading expert in machine learning and cloud architecture",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      },
      {
        name: "Emily Zhang",
        role: "VP Innovation, Global Dynamics",
        bio: "Transforming enterprises through emerging technologies",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
      },
    ],
    tags: ["Paid", "Limited Seats"],
    price: "$299",
    attendees: "500+",
  },
  {
    id: 2,
    title: "Executive Leadership Forum 2025",
    date: "April 22, 2025",
    time: "8:30 AM - 5:00 PM",
    location: "Grand Hyatt Hotel, New York",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    description:
      "An exclusive gathering for C-suite executives and senior leaders to explore strategic leadership, organizational excellence, and sustainable growth. Engage in dynamic discussions, case studies, and best practices from Fortune 500 companies.",
    schedule: [
      "8:30 AM - Executive Breakfast & Registration",
      "9:30 AM - Leadership in Times of Change",
      "11:00 AM - Case Study Presentations",
      "1:00 PM - Gourmet Lunch & Peer Networking",
      "2:30 PM - Strategic Planning Workshop",
      "4:00 PM - Panel: Building High-Performance Teams",
      "5:00 PM - Closing & Networking Reception",
    ],
    speakers: [
      {
        name: "James Anderson",
        role: "Former Fortune 500 CEO",
        bio: "Author of 'Lead with Purpose' - 30 years executive experience",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
      },
      {
        name: "Dr. Emma Thompson",
        role: "Leadership Consultant",
        bio: "Harvard Business School professor and organizational strategist",
        photo: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=200",
      },
      {
        name: "David Kumar",
        role: "Chief People Officer, TechGiant",
        bio: "Revolutionizing workplace culture and employee engagement",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      },
    ],
    tags: ["Paid", "Limited Seats"],
    price: "$499",
    attendees: "200+",
  },
  {
    id: 3,
    title: "Digital Marketing Excellence Conference",
    date: "May 18, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Austin Convention Center, Texas",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    description:
      "Discover the latest trends in digital marketing, social media strategies, and customer engagement. Learn from industry experts about data-driven marketing, content creation, and building powerful brand narratives in the digital age.",
    schedule: [
      "10:00 AM - Registration & Welcome",
      "10:30 AM - Keynote: The Evolution of Digital Marketing",
      "12:00 PM - Lunch & Exhibition Hall",
      "1:30 PM - Social Media Strategy Masterclass",
      "3:00 PM - Data Analytics Workshop",
      "4:30 PM - Future Trends Panel Discussion",
      "6:00 PM - Networking Mixer",
    ],
    speakers: [
      {
        name: "Lisa Martinez",
        role: "CMO, Digital Innovations Inc",
        bio: "Award-winning marketer with viral campaign successes",
        photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200",
      },
      {
        name: "Ryan Foster",
        role: "Social Media Strategist",
        bio: "Built 10M+ follower communities for major brands",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
      },
    ],
    tags: ["Paid"],
    price: "$249",
    attendees: "400+",
  },
  {
    id: 4,
    title: "Sustainable Business Summit 2025",
    date: "June 10, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Seattle Conference Center",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    description:
      "Explore how leading corporations are integrating sustainability into their core business strategies. Learn about ESG frameworks, circular economy models, and creating positive environmental impact while driving profitability.",
    schedule: [
      "9:00 AM - Registration & Sustainable Breakfast",
      "10:00 AM - Keynote: Business for a Better Planet",
      "11:30 AM - ESG Implementation Workshop",
      "1:00 PM - Organic Lunch & Green Expo",
      "2:30 PM - Case Studies: Success Stories",
      "4:00 PM - Panel: Future of Sustainable Business",
      "5:00 PM - Closing Ceremony",
    ],
    speakers: [
      {
        name: "Dr. Alexandra Green",
        role: "Sustainability Director, EcoTech",
        bio: "Environmental scientist and corporate sustainability pioneer",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200",
      },
      {
        name: "Marcus Johnson",
        role: "CEO, GreenFuture Consulting",
        bio: "Helping Fortune 500 companies achieve carbon neutrality",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      },
    ],
    tags: ["Paid", "Limited Seats"],
    price: "$349",
    attendees: "350+",
  },
  {
    id: 5,
    title: "Financial Services Innovation Forum",
    date: "July 8, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Chicago Hilton Downtown",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    description:
      "Dive deep into fintech innovations, blockchain applications, and the future of banking. Network with CFOs, financial analysts, and technology leaders reshaping the financial services landscape.",
    schedule: [
      "8:00 AM - Breakfast & Registration",
      "9:00 AM - State of Fintech 2025",
      "10:30 AM - Blockchain & Cryptocurrency Panel",
      "12:00 PM - Executive Lunch",
      "1:30 PM - Risk Management Workshop",
      "3:00 PM - Future of Banking Discussion",
      "4:00 PM - Closing & Cocktails",
    ],
    speakers: [
      {
        name: "Jennifer Wu",
        role: "CFO, FinanceFirst Group",
        bio: "Pioneering digital transformation in financial services",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200",
      },
      {
        name: "Robert Chen",
        role: "Blockchain Expert",
        bio: "Leading cryptocurrency and DeFi innovations",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      },
    ],
    tags: ["Paid"],
    price: "$399",
    attendees: "300+",
  },
  {
    id: 6,
    title: "Annual Corporate Wellness Conference",
    date: "August 12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Miami Beach Convention Center",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
    description:
      "Focus on employee wellbeing, mental health, and creating thriving workplace cultures. Learn strategies to boost productivity, reduce burnout, and build resilient teams in the modern corporate environment.",
    schedule: [
      "9:00 AM - Registration & Healthy Breakfast",
      "10:00 AM - Mental Health in the Workplace",
      "11:30 AM - Wellness Program Design Workshop",
      "1:00 PM - Nutritious Lunch & Activities",
      "2:00 PM - Building Resilient Teams",
      "3:30 PM - Panel: Work-Life Integration",
      "4:00 PM - Closing Remarks",
    ],
    speakers: [
      {
        name: "Dr. Samantha Brooks",
        role: "Corporate Psychologist",
        bio: "Expert in workplace mental health and organizational psychology",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      },
      {
        name: "Tom Harrison",
        role: "VP HR, HealthCorp",
        bio: "Transforming corporate wellness programs globally",
        photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200",
      },
    ],
    tags: ["Paid", "Limited Seats"],
    price: "$279",
    attendees: "250+",
  },
];

const truncate = (text, maxLength = 170) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text;

const emptyFormState = { name: "", email: "", phone: "", tickets: 1 };

const CorporateEventsApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(() => ({ ...emptyFormState }));
  const successTimeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    },
    []
  );

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return events;
    }
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowBookingForm(false);
    setShowSuccess(false);
    setFormData(() => ({ ...emptyFormState }));
  };

  const handleBooking = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    setShowBookingForm(false);
    setShowSuccess(true);

    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
    }

    successTimeoutRef.current = setTimeout(() => {
      setShowSuccess(false);
      setSelectedEvent(null);
      setFormData(() => ({ ...emptyFormState }));
    }, 3000);
  };

  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 text-white max-w-7xl mx-auto w-full">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold mb-4">
                Corporate Event
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {selectedEvent.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center">
                  <span className="text-3xl mr-2">📅</span>
                  <span className="font-semibold">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-2">⏰</span>
                  <span className="font-semibold">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-2">👥</span>
                  <span className="font-semibold">
                    {selectedEvent.attendees} Expected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <button
            onClick={() => {
              setSelectedEvent(null);
              setShowBookingForm(false);
            }}
            className="mb-8 px-6 py-3 bg-white hover:bg-gray-100 rounded-xl shadow-lg transition-all transform hover:scale-105 font-semibold flex items-center gap-2"
          >
            <span>←</span> Back to Events
          </button>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    📋
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    About This Event
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    🕐
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Event Schedule
                  </h2>
                </div>
                <div className="space-y-4">
                  {selectedEvent.schedule.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Location</h2>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-xl flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🗺️</div>
                    <p className="text-xl font-bold text-gray-800">
                      {selectedEvent.location}
                    </p>
                    <p className="text-gray-600 mt-2">Interactive Map</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    🎤
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Featured Speakers
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {selectedEvent.speakers.map((speaker) => (
                    <div
                      key={speaker.name}
                      className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                      />
                      <h3 className="font-bold text-xl text-gray-800 mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-sm font-semibold text-purple-600 mb-2">
                        {speaker.role}
                      </p>
                      <p className="text-sm text-gray-600">{speaker.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    {selectedEvent.price}
                  </div>
                  <p className="text-gray-600">Per Person</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {selectedEvent.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${
                        tag === "Limited Seats"
                          ? "bg-gradient-to-r from-red-400 to-pink-500 text-white"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {!showBookingForm ? (
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg"
                  >
                    🎟️ Book Your Seat
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">
                        Number of Tickets
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={formData.tickets}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            tickets: Math.min(
                              10,
                              Math.max(
                                1,
                                Number.parseInt(event.target.value, 10) || 1
                              )
                            ),
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <button
                      onClick={handleBooking}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg"
                    >
                      ✅ Confirm Booking
                    </button>
                    <button
                      onClick={() => setShowBookingForm(false)}
                      className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Full day access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Meals & refreshments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Workshop materials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Networking opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Certificate of attendance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center transform animate-bounce max-w-md">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Booking Confirmed! 🎉
              </h3>
              <p className="text-gray-600 text-lg">
                Your tickets have been reserved successfully.
              </p>
              <p className="text-gray-500 mt-2">
                Check your email for confirmation details.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 p-6 mt-17 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-white rounded-full shadow-lg mb-4">
            <span className="text-2xl">🏢</span>
            <span className="ml-2 font-bold text-gray-700">Professional Events</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Corporate{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Elevate your professional journey with industry-leading conferences, networking
            opportunities, and transformative business experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search events by name or location..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full px-8 py-5 text-lg border-4 border-white rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {filteredEvents.length}
            </div>
            <div className="text-gray-600 font-semibold mt-2">Events</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              2000+
            </div>
            <div className="text-gray-600 font-semibold mt-2">Attendees</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-600 font-semibold mt-2">Speakers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-gray-600 font-semibold mt-2">Satisfaction</div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="text-5xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              No matching events found
            </h2>
            <p className="text-gray-600">
              Try adjusting your search to discover more inspiring corporate experiences.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredEvents.map((eventItem) => (
              <div
                key={eventItem.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={eventItem.image}
                    alt={eventItem.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {eventItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                          tag === "Limited Seats"
                            ? "bg-gradient-to-r from-red-400 to-pink-500 text-white"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl drop-shadow-lg">
                      {eventItem.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>📅</span>
                      <span>{eventItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>📍</span>
                      <span>{eventItem.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>⏰</span>
                      <span>{eventItem.time}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {truncate(eventItem.description)}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-xl font-bold text-purple-600">
                        {eventItem.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expected</p>
                      <p className="text-xl font-bold text-blue-600">
                        {eventItem.attendees}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectEvent(eventItem)}
                      className="flex-1 w-full mt-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all text-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Plan Your Next Corporate Experience
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            From exclusive leadership forums to innovation summits, our curated events blend
            strategic insights with high-impact networking.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Explore Top Events
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center transform animate-bounce max-w-md">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Booking Confirmed! 🎉
            </h3>
            <p className="text-gray-600 text-lg">
              Your tickets have been reserved successfully.
            </p>
            <p className="text-gray-500 mt-2">
              Check your email for confirmation details.
            </p>
          </div>
        </div>
      )}
    </div>
    <Footer1 />
    </>
  );
};

export default CorporateEventsApp;