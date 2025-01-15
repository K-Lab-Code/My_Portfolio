// This is a static page mocking an "About Us" section for our fake user data
export default function PortfolioPage() {
  return (
    <section class="page-section" id="work">
      <h2>Work</h2>
      <div class="flex-container">
        <section class="flex-item surf-report">
          <div><h3>Surf Report</h3></div>
        </section>
        <section class="flex-item led-wall">
          <div><h3>Led Wall</h3></div>
        </section>
        <section class="flex-item react-calc">
          <div><h3>Calculator</h3></div>
        </section>
        <section class="flex-item pastel-puzzles">

          <div><h3>Pastel Puzzels</h3></div>
        </section>
        <section class="flex-item run-buddy">
          <div><h3>Run Buddy</h3></div>
        </section>
      </div>
    </section>
  );
}
