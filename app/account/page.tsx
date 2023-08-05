import Header from "@/components/header";
import AccountContent from "./components/account-content";

const Account = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overlflow-y-auto">
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account settings
          </h1>
        </div>
      </Header>

      <AccountContent />
    </div>
  );
};

export default Account;
