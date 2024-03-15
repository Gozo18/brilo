import ColoredSection from "@/components/ColoredSection"
import HeroSection from "@/components/HeroSection"
import BasicSection from "@/components/BasicSection"
import FilterSection from "@/components/FilterSection"

export default function Home() {
  return (
    <main className="">
      {/*  sekce 1 */}
      <HeroSection
        title="Hlavní nadpis webu"
        description="V k žert planetu rysů obdivují stravování starověkého zebřičky
                  u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem."
        image="/image1.jpg"
        primaryButtonText="Poptat nabídku"
        secondaryButtonText="Více informací"
      />
      {/*  sekce 2 */}
      <ColoredSection
        title="Nechte své peníze růst!"
        description="V k žert planetu rysů obdivují stravování starověkého zebřičky
                  u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem –
                  jižní využitelný uchu těžko. Dravcům vousům houba horu žijí
                  mého vývojovou z společnosti nemigrují vy plná internetová, je
                  charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné,
                  zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení
                  žít mimořádnými virů stejný či palec."
        listitem1="• Musel za až angličtinu látky nohy deprimovaná
                  polokouli i roku map."
        listitem2="• Těžko popsal, ještě zúročovat však, by čase musel mi
                  nuly, ta naší."
        listitem3="• Musel za až angličtinu látky nohy deprimovaná
                  polokouli i roku map."
        listitem4="• Těžko popsal, ještě zúročovat však, by čase musel mi
                  nuly, ta naší."
        image="/image2.jpg"
        buttonText="Zjistit více"
      />
      {/*  sekce 3 */}
      <BasicSection
        title="Nechte své peníze růst!"
        description="V k žert planetu rysů obdivují stravování starověkého zebřičky
                  u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem –
                  jižní využitelný uchu těžko. Dravcům vousům houba horu žijí
                  mého vývojovou z společnosti nemigrují vy plná internetová, je
                  charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné,
                  zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení
                  žít mimořádnými virů stejný či palec."
        buttonText="Zaregistovat se"
        image="/image3.jpg"
      />
      {/*  sekce 3 */}
      <FilterSection />
    </main>
  )
}
