import Cards from './components/Cards';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Cards
            title="FREE"
            price="$0/month"
            features={[
              "Single User",
              "50GB Storage",
              "Unlimited Public Projects",
              "Community Access",
              "Unlimited Private Projects",
              "Dedicated Phone Support",
              "Free Subdomain",
              "Monthly Status Reports"
            ]}
            cardNumber={1}
          
          />
        </div>
        <div className="col-md-4">
          <Cards
            title="PLUS"
            price="$9/month"
            features={[
              "5 Users",
              "50GB Storage",
              "Unlimited Public Projects",
              "Community Access",
              "Unlimited Private Projects",
              "Dedicated Phone Support",
              "Free Subdomain",
              "Monthly Status Reports"
            ]}
            cardNumber={2}
          />
        </div>
        <div className="col-md-4">
          <Cards
            title="PRO"
            price="$49/month"
            features={[
              "Unlimited Users",
              "1000GB Storage",
              "Unlimited Public Projects",
              "Community Access",
              "Unlimited Private Projects",
              "Dedicated Phone Support",
              "Free Subdomain",
              "Monthly Status Reports"
            ]}
            cardNumber={3}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
