import "../Styles/Task2.css";

export default function Dashboard() {
  return (
    <>
      <section class="dashboard">
        <h1 className="Dsh" >Dashboard</h1>
        <div class="stats-container">
          <div class="stat-box">
            <h2>43</h2>
            <p>New Tickets</p>
            <span class="stat-change positive">+6%</span>
          </div>
          <div class="stat-box">
            <h2>17</h2>
            <p>Closed Today</p>
            <span class="stat-change negative">-3%</span>
          </div>
          <div class="stat-box">
            <h2>7</h2>
            <p>New Replies</p>
            <span class="stat-change positive">+9%</span>
          </div>
          <div class="stat-box">
            <h2>27.3k</h2>
            <p>Followers</p>
            <span class="stat-change positive">+3%</span>
          </div>
          <div class="stat-box">
            <h2>$95</h2>
            <p>Daily Earnings</p>
            <span class="stat-change negative">-2%</span>
          </div>
          <div class="stat-box">
            <h2>621</h2>
            <p>Products</p>
            <span class="stat-change negative">-1%</span>
          </div>
        </div>
      </section>
    </>
  );
}
