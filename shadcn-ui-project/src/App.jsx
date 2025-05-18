import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Create from './sidebar_component/Create'
import Keyword from './sidebar_component/Keyword'
import Al_Keyword from './sidebar_component/Al_Keyword'
import Competitor from './sidebar_component/Competitor'
import Import from './sidebar_component/Import'
import Manual from './sidebar_component/Manual'
import Bulk from './sidebar_component/Bulk'
import Longtail from './sidebar_component/LongTail'
import ArticleSettings from './sidebar_component/ArticleSettings'
import Settings from './sidebar_component/Settings'
import Blogs from './sidebar_component/Blogs'
import Internal from './sidebar_component/Internal'
import Integrations from './sidebar_component/Integrates'
import Subscriptions from './sidebar_component/Subscription'
import Update from './sidebar_component/Update'
import Help from './sidebar_component/Help'
import Profile from './sidebar_component/Profile'
import Backlinks from './sidebar_component/BackLink'
import Affiliate from './sidebar_component/Affiliate'
import Live from './sidebar_component/Live'
import { Sidebar } from './layout/SideBarMobile'
import { SidebarProvider } from './components/ui/sidebar'

function App() {

  return (
    <>
    <div className='sm:hidden block fixed '>
    <SidebarProvider>
    <Sidebar />
    </SidebarProvider>
    </div>
      <div className='p-4'>
      <Routes>

    <Route path="/create" element={
        <Create />
      } />

      <Route path="/keyword" element={
        <Keyword />
      } />

  <Route path="/ai_keyword" element={
        <Al_Keyword />
      } />

      <Route
       path="/generated" element={
        <Header />
      } />

       <Route
       path="/" element={
        <Header />
      } />

      <Route
       path="/steal" element={
        <Competitor />
      } />

       <Route
       path="/import" element={
        <Import />
      } />

       <Route
       path="/manual" element={
        <Manual />
      } />

       <Route
       path="/bulk" element={
        <Bulk />
      } />

       <Route
       path="/longtail" element={
        <Longtail />
      } />

       <Route
       path="/setting" element={
        <ArticleSettings />
      } />

      <Route
       path="/settings" element={
        <Settings />
      } />

      <Route
       path="/blog" element={
        <Blogs />
      } />

      <Route
       path="/integrate" element={
        <Integrations />
      } />

      <Route
       path="/internal" element={
        <Internal />
      } />
      <Route
       path="/subscription" element={
        <Subscriptions />
      } />

      <Route
       path="/update" element={
        <Update />
      } />

      <Route
       path="/help" element={
        <Help />
      } />

      <Route
       path="/profile" element={
        <Profile />
      } />

      <Route
       path="/backlinks" element={
        <Backlinks />
      } />

      <Route
       path="/affiliate" element={
        <Affiliate />
      } />

      <Route
       path="/live" element={
        <Live />
      } />
      </Routes>
      </div>
    </>
  )
}

export default App
