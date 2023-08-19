import { cookies } from "next/headers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiLeetcode, SiCodingninjas, SiGeeksforgeeks } from "react-icons/si";
import BadgeText from "../BadgeText/BadgeText";
import createPlatforms from "@/utils/createPlatforms";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { redirect } from "next/navigation";
import { fetchUser } from "@/utils/user/fetchUser";
import { fetchLeetcodeData } from "@/utils/usersData/fetchLeetcodeData";
import { fetchCodingNinjasData } from "@/utils/usersData/fetchCodingNinjasData";
import { fetchGfgData } from "@/utils/usersData/fetchGfgData";

const fetchUserf = async (leetcode) => {
  try {
    const user = await fetchUser(leetcode);

    return user;
  } catch (e) {
    redirect("/");
  }
};

const fetchData = async ({ leetcode, codingninjas, geeksforgeeks }) => {
  // fetch data for leetcode
  const leetcodeRes = await fetchLeetcodeData(leetcode);

  // fetch data for codingninjas
  const codingninjasRes = await fetchCodingNinjasData(codingninjas);

  // fetch data for geeksforgeeks
  const gfgRes = await fetchGfgData(geeksforgeeks);

  if(leetcodeRes=== null || codingninjasRes === null || gfgRes === null){
    redirect("/");
  }
  
  const leetcodeData = leetcodeRes.acSubmissionNum;
  const codingninjasData = codingninjasRes.submission_stats;
  const gfgData = gfgRes;

  return {
    leetcodeData,
    codingninjasData,
    gfgData,
  };
};

const FullCard = async ({ username }) => {

  const cookieStore = cookies();
  const theme = cookieStore.get("theme")

  const user = await fetchUserf(username);
  
  const { name, email, avatar, year, leetcode, codingninjas, geeksforgeeks } = user;
  const data = await fetchData({ leetcode, codingninjas, geeksforgeeks });

  const array = createPlatforms(data);

  return (
    <div className="w-11/12">
      <Card className="pointer-events-none">
        <CardHeader>
          <div className="flex flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage src={`${avatar}`} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="felx flex-col gap-3">
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{`${year} Year`}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-row gap-5 justify-center flex-wrap">
            {array.map(({ icon, platform, problems }, key) => {
              return (
                <Card className="min-w-[220px]" key={key}>
                  <CardContent className="mt-5 flex flex-col gap-4">
                    <div className="w-full flex flex-row gap-3 items-center justify-center my-4 text-xl">
                      {icon}
                      <p>{platform}</p>
                    </div>
                    {problems.map((category, key) => {
                      return (
                        <BadgeText category={category.level} key={key}>
                          {category.count}
                        </BadgeText>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FullCard;
