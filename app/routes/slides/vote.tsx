import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiText,
} from "@elastic/eui";
import { ActionFunction, Form, LoaderFunction, useLoaderData } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if (formData.get("iLikeRemix") === "1") {
    if (!process.env.iLikeRemix) {
      process.env.iLikeRemix = 0;
    }
    process.env.iLikeRemix = parseInt(process.env.iLikeRemix, 10) + 1;
  }
  if (formData.get("iDoNotLikeRemix") === "1") {
    if (!process.env.iDoNotLikeRemix) {
      process.env.iDoNotLikeRemix = 0;
    }
    process.env.iDoNotLikeRemix = parseInt(process.env.iDoNotLikeRemix, 10) + 1;
  }

  return null;
};

export const loader: LoaderFunction = ({ context }) => {
  const { iLikeRemix, iDoNotLikeRemix } = process.env;
  return {
    votes: {
      iLikeRemix: iLikeRemix ?? 0,
      iDoNotLikeRemix: iDoNotLikeRemix ?? 0,
    },
  };
};

export default function Vote() {
  const { votes } = useLoaderData();

  return (
    <EuiText>
      <h2>Grade School Crush Quiz</h2>
      <h4>
        Go to{" "}
        <a href="https://remix.nlsmith.com/slides/vote">
          https://remix.nlsmith.com/slides/vote
        </a>{" "}
        to vote
      </h4>
      <Form method="post">
        <EuiForm component="div">
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem>{votes.iLikeRemix}</EuiFlexItem>
            <EuiFlexItem>{votes.iDoNotLikeRemix}</EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem>
              <EuiButton name="iLikeRemix" value="1" type="submit">
                I like Remix
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiButton name="iDoNotLikeRemix" value="1" type="submit">
                I do not like Remix
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiForm>
      </Form>
    </EuiText>
  );
}
