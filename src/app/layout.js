import { Navbar } from '@/components/Navbar';
import '@/styles/globals.scss';
import MainStyles from './page.module.scss';
import { PostsProvider } from './Posts-Context';

export const metadata = {
  title: 'Home',
  description: 'Posts Feed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <main className={MainStyles['container']}>
          <PostsProvider>
            {children}
          </PostsProvider>
        </main>
        <Navbar />
      </body>
    </html>
  )
}
