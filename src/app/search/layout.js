
import SearchBox from '@/components/SearchBox'
import '../globals.css'



export default function SearchLayout({ children }) {
  return (
   
      <div>
          <SearchBox/>
          {children}
      
      </div>
    
  )
}
