# Awards & Entry Experience

## What will be built
- A dedicated Awards page that continues The Golden Binding’s editorial visual system.
- Clear sections for the current award cycle, eligibility, judging process, timeline, fees, FAQs, and category cards.
- A prominent application path from the Awards page into a guided entry experience.
- A responsive multi-step entry form covering entrant details, book details, category selection, eligibility confirmation, and review.
- Accessible inline validation, step progress, back/continue controls, and a clear completion state.

## Navigation and responsive behavior
- Connect the homepage Awards and Enter the Awards actions to dedicated pages.
- Keep the full editorial navigation on large screens and the compact menu on small screens.
- Preserve the existing dark green, warm paper, oxblood, and restrained gold system with subtle motion.

## Technical details
- Add `/awards` and `/awards/enter` routes with unique metadata.
- Use Zod validation on each form step and avoid collecting payment or persisting submissions at this stage.
- Reuse the shared button system and add small reusable award/entry components where useful.
- Verify the complete path and validation states on desktop and mobile.
