import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/features/cart/CartContext'
import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductsPage from '@/pages/ProductsPage'
import CategoryPage from '@/pages/CategoryPage'
import CollectionsPage from '@/pages/CollectionsPage'
import EditorialPage from '@/pages/EditorialPage'
import CartPage from '@/pages/CartPage'
import ProductPage from '@/pages/ProductPage'
import SearchPage from '@/pages/SearchPage'
import SimpleInfoPage from '@/pages/SimpleInfoPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import PrivacyPage from '@/pages/PrivacyPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="category/:slug" element={<CategoryPage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="editorial" element={<EditorialPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="account" element={<SimpleInfoPage title="Account" description="Sign in and order history will live here." />} />
            <Route path="faq" element={<SimpleInfoPage title="FAQ" description="Frequently asked questions will be published here." />} />
            <Route path="shipping" element={<SimpleInfoPage title="Shipping & Returns" description="Policy copy and return windows will be finalized here." />} />
            <Route path="size-guide" element={<SimpleInfoPage title="Size Guide" description="Measurement charts and fit notes will be added here." />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="sustainability" element={<SimpleInfoPage title="Sustainability" description="Materials sourcing and impact reporting will be shared on this page." />} />
            <Route path="careers" element={<SimpleInfoPage title="Careers" description="Open roles and culture notes will be listed here." />} />
            <Route path="terms" element={<SimpleInfoPage title="Terms & Conditions" description="Legal terms will be provided by your counsel for this page." />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
