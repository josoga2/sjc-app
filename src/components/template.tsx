import SjcButton from "@/components/sjc-button";


export default function Template({ id }: { id: string }) {

  return (
    <main>
      <div key={id} className="hidden w-full py-10  h-full md:flex flex-col gap-5 px-10  items-center justify-center  pb-10">
        {/*desktop*/}
        <div>Insert Desktop Code Here</div>
        <SjcButton type="primary" text="SJC"/>
        
      </div>

      <div className="flex flex-col w-full md:hidden gap-5 p-5  rounded-xl">
          <div>Insert Mobile Code Here</div>
          <SjcButton type="primary" text="SJC"/>
      </div>
    </main>
    
  );
}
