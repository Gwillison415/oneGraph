import React, {FunctionComponent} from "react";
import { useQuery } from "react-apollo";
import GET_PACKAGE from "../gql/queries/GET_PACKAGE";
export interface npmPackage {
    name: string;
    homepage:string;
    description: string;
} 

// export interface npmData {
//   pkg: npmPackage[];
// }
export interface npmPackageData {
  pkg: npmPackage;
}
// export interface packageData {
//   npm: npmData | any;
// }
export interface packageData {
  npm: {pkg: npmPackage[]};
}

export interface npmVars {
    name: string;
}
type AppProps = { packageName: string };

const Card: React.FC<packageData> = (data: packageData) => {
  // const {
  //   npm: { pkg },
  // } = data;
  console.log('data', data)
  return (
    <div>
      {/* <a href={pkg.homepage}>
        {pkg.name} ({pkg.description})
      </a> */}
    </div>
  );
};
export default function NPMQueryContainer({ packageName }: AppProps) {
  const { loading, data, error } = useQuery<packageData, npmVars>(GET_PACKAGE, {
    variables: { name: packageName },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Uh oh, something went wrong!</div>;
  }
//   const {
//     npm: { pkg },
//   } = data;
// const npm =data?.npm
// const pkg = npm?.pkg
//   if (!pkg) {
//     return <div>No npm package for {packageName}</div>;
  // }
  // return <Card data={{ npm: npmPackage }}></Card>;
  
}
