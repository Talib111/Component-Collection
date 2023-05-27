'use client'

import React from 'react'
import { Menu, X, Check, MinusCircle, PlusCircle, ChevronRight } from 'lucide-react'
import CodeView from '../Components/Common/CodeView'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10/mth',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
  },
  {
    name: 'Enterprise plan',
    price: '$40/mth',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
  },
]

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },

  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'You can change the email address associated with your account by going to account from a laptop or desktop.',
  },
]

export function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <CodeView code={`'use client'

import React from 'react'
import { Menu, X, Check, MinusCircle, PlusCircle, ChevronRight } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10/mth',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
  },
  {
    name: 'Enterprise plan',
    price: '$40/mth',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
  },
]

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },

  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'You can change the email address associated with your account by going to account from a laptop or desktop.',
  },
]

export function PricingPageTwo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="mx-auto max-w-7xl px-2 md:px-4">
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden grow px-12 lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div>
        {/* Hero Section */}
        <div className="mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Simple, transparent pricing
          </p>
          <p className="max-w-3xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mt-8 space-y-4 md:mt-12">
          <div className="grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-lg border border-gray-200 bg-white">
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <p className="text-4xl font-bold leading-10">{plan.price}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      {plan.name}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="flex w-full max-w-sm flex-col px-8 py-8">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
                  <div className="flex w-full flex-col space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="inline-flex w-full space-x-3">
                        <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-12 space-y-16 bg-gray-50 py-16">
          <div className="mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 md:w-3/4">
              {/* faq title */}
              <div className="space-y-4 justify-self-center">
                <p className="text-center text-3xl font-bold leading-10 text-gray-900">
                  Frequently asked questions
                </p>
                <p className="text-center text-lg leading-loose text-gray-600">
                  Everything you need to know about the product and billing.
                </p>
              </div>
              {/*  */}
              <div className="divide-y divide-gray-300">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="flex justify-between space-x-6 py-6">
                    <div className="inline-flex flex-col items-start justify-start space-y-2">
                      <p className="text-lg font-medium leading-7 text-gray-900">{faq.question}</p>
                      {index === 0 ? (
                        <p className="text-base leading-normal text-gray-600">{faq.answer}</p>
                      ) : null}
                    </div>
                    <div>
                      {index === 0 ? (
                        <MinusCircle className="h-6 w-6 text-gray-600" />
                      ) : (
                        <PlusCircle className="h-6 w-6 text-gray-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* --- */}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="w-full pb-8 pt-12 md:mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
            <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
              <input
                className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-8" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div className="inline-flex items-center">
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
            <span className="ml-4 text-lg font-bold">DevUI</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-gray-500">© 2023 DevUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
`} />
      <div className="mx-auto max-w-7xl px-2 md:px-4">
        <header className="relative w-full border-b bg-white pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <div className="inline-flex items-center space-x-2">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="font-bold">DevUI</span>
            </div>
            <div className="hidden grow px-12 lg:block">
              <ul className="inline-flex space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Button text
              </button>
            </div>
            <div className="lg:hidden">
              <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 50 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <span className="font-bold">DevUI</span>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {menuItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Button text
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
        <div>
          {/* Hero Section */}
          <div className="mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Simple, transparent pricing
            </p>
            <p className="max-w-3xl text-base text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
              neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
            </p>
          </div>
          <div className="mt-8 space-y-4 md:mt-12">
            <div className="grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8">
              {plans.map((plan) => (
                <div key={plan.name} className="rounded-lg border border-gray-200 bg-white">
                  <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                    <p className="text-4xl font-bold leading-10">{plan.price}</p>
                    <div className="flex w-full flex-col items-start justify-start space-y-1">
                      <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                        {plan.name}
                      </p>
                      <p className="w-full text-base leading-normal text-gray-600">
                        Billed annually.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full max-w-sm flex-col px-8 py-8">
                    <div className="flex w-full flex-col items-start justify-start space-y-3">
                      <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Get Started
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
                    <div className="flex w-full flex-col space-y-4">
                      {plan.features.map((feature) => (
                        <div key={feature} className="inline-flex w-full space-x-3">
                          <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                            <Check className="h-4 w-4" />
                          </div>
                          <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* FAQs */}
          <div className="mt-12 space-y-16 bg-gray-50 py-16">
            <div className="mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center space-y-6 md:w-3/4">
                {/* faq title */}
                <div className="space-y-4 justify-self-center">
                  <p className="text-center text-3xl font-bold leading-10 text-gray-900">
                    Frequently asked questions
                  </p>
                  <p className="text-center text-lg leading-loose text-gray-600">
                    Everything you need to know about the product and billing.
                  </p>
                </div>
                {/*  */}
                <div className="divide-y divide-gray-300">
                  {faqs.map((faq, index) => (
                    <div key={faq.question} className="flex justify-between space-x-6 py-6">
                      <div className="inline-flex flex-col items-start justify-start space-y-2">
                        <p className="text-lg font-medium leading-7 text-gray-900">{faq.question}</p>
                        {index === 0 ? (
                          <p className="text-base leading-normal text-gray-600">{faq.answer}</p>
                        ) : null}
                      </div>
                      <div>
                        {index === 0 ? (
                          <MinusCircle className="h-6 w-6 text-gray-600" />
                        ) : (
                          <PlusCircle className="h-6 w-6 text-gray-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* --- */}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="w-full pb-8 pt-12 md:mt-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
            <div className="w-full px-4 md:w-1/2 lg:px-0">
              <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
              <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="mb-8 lg:mb-0">
                  <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
                  <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                    <li>About us</li>
                    <li>Company History</li>
                    <li>Our Team</li>
                    <li>Our Vision</li>
                    <li>Press Release</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-8" />
          <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
            <div className="inline-flex items-center">
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
              <span className="ml-4 text-lg font-bold">DevUI</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium text-gray-500">© 2023 DevUI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
