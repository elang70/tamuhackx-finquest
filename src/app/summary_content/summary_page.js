import hsJOB from "../data/hs_main.json";
import collegeD from "../data/colleges.json";
import collegeL from "../data/colleges_loan.json";
import frJob from "../data/job_options.json";

export default function Summary() {
  const hs_summaryInfo = hsJOB;
  const hs_job = hsJOB.choices[0];

  const firstCollege = collegeD.colleges[0];

  const loanDetails = collegeL.financial_options[0];

  const earlyCareerJob = frJob

  const { job, ...otherAttributes } = hs_job;

  return (
    <>
      <h3>Summary</h3>

      <h1>Phase 1: Pre-College Decision</h1>
      <p>
        Establishing a solid financial foundation in high school is key for
        future success. Begin by creating a budget that covers income, expenses,
        and savings. Consider part-time jobs to kickstart your income. Save a
        portion of your earnings, exploring options like a savings account or
        investments. Boost your financial literacy by understanding budgeting,
        credit, and investing. Seek guidance from mentors, family, and online
        resources. Cultivate disciplined saving habits, avoid unnecessary debt,
        and make informed investment choices for lasting financial stability and
        wealth
      </p>

      <div>
        <h2>Job Details</h2>
        <ul>
          <li>
            <strong>Job:</strong> {job}
          </li>
          {Object.entries(otherAttributes).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <h1>Phase 2: College Decision</h1>

      <p>
        Choosing the right college path involves weighing pros and cons.
        Traditional four-year colleges offer a comprehensive academic
        experience, networking opportunities, and a traditional campus life.
        However, they come with a higher cost and may take longer to complete.
        Community colleges provide cost-effective options and flexibility but
        may have fewer resources and networking opportunities. Online education
        offers convenience and accessibility but lacks the in-person experience.
        Trade schools focus on specific skills, offering quicker entry into the
        workforce, but might have limited academic breadth. Ultimately, the
        choice depends on individual goals, preferences, and financial
        considerations.
      </p>
      <div>
        <h2>College Details</h2>
        <ul>
          <li>
            <strong>College:</strong> {firstCollege.name}
          </li>
          <li>
            <strong>Tuition Cost:</strong> {firstCollege.tuition_cost}
          </li>
          <li>
            <strong>Bank Balance Change:</strong>{" "}
            {firstCollege.bank_balance_change}
          </li>
          <li>
            <strong>Assets Change:</strong> {firstCollege.assets_change}
          </li>
          <li>
            <strong>Liabilities Change:</strong>{" "}
            {firstCollege.liabilities_change}
          </li>
          <li>
            <strong>Educational Benefits:</strong>{" "}
            {firstCollege.educational_benefits}
          </li>
          <li>
            <strong>Career Impact:</strong> {firstCollege.career_impact}
          </li>
        </ul>
      </div>

      <div>
        <h2>Loan Details</h2>
        <ul>
          {Object.entries(loanDetails).map(([key, value]) => (
            <li key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Phase 3: Early Career</h2>
        <p>
          When searching for a new job, it's crucial to consider various factors
          for a well-rounded decision. Assess the offered salary to ensure it
          aligns with your financial goals and industry standards. Examine the
          benefits package, including health insurance, retirement plans, and
          other perks, to gauge the overall compensation. Evaluate work hours
          and flexibility, ensuring they align with your lifestyle and
          preferences. Consider the job location in terms of commute, cost of
          living, and its impact on work-life balance. Additionally, research
          company culture, growth opportunities, and job responsibilities to
          ensure they align with your career aspirations and values. Making a
          thoughtful evaluation of these elements can lead to a more satisfying
          and successful career choice.
        </p>


      </div>
    </>
  );
}
