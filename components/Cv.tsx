import {Card, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
const Cv = () => {
    return (
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
        <Card>
            <CardTitle className='flex justify-center mt-5'>Card Title</CardTitle>
            <CardContent>
                Card Content
            </CardContent>
            <CardFooter>
                Card Footer
            </CardFooter>
        </Card>
        </div>
        <div className="col-span-2">
         02
        </div>
        <div className="row-span-2 col-span-2">03</div>
      </div>
    );
  };
  
  export default Cv