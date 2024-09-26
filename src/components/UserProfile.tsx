import LayoutComponent from "../components/LayoutComponent";
import { useState, useEffect, FC } from "react";
import {} from "../components/CardNavigation";
import { useParams } from "react-router-dom";
import { SummaryItem } from "./SummaryItem";
import InsetText from "./InsetText";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  bio: string;
  description: string;
  keySkills: string[];
  image: string;
}

interface Testimonials {
  id: number;
  userId: number;
  content: string;
  rating: number;
}

const UserProfilePage: FC = () => {
  const { userid } = useParams<{ userid: string }>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonials[]>();
  const [loadingTestimonials, setLoadingTestimonials] = useState<boolean>(true);
  const [errorTestimonials, setErrorTestimonials] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/" + `${userid}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userid]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/users/" + `${userid}` + "/testimonials"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (errorTestimonials: unknown) {
        if (errorTestimonials instanceof Error) {
          setErrorTestimonials(errorTestimonials.message);
        } else {
          setErrorTestimonials("An unknown error occurred");
        }
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, [userid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loadingTestimonials) {
    return <div>Loading...</div>;
  }

  if (errorTestimonials) {
    return <div>Error: {error}</div>;
  }
  console.log({ testimonials });
  return (
    <>
      <LayoutComponent>
        <div className="ds_wrapper">
          {user && (
            <div key={user.id}>
              <div className="ds_summary-card">
                <div className="ds_summary-card__header">
                  <h3 className="ds_summary-card__header-title">{user.name}</h3>
                </div>
                <div className="ds_summary-card__content">
                  <ul className="ds_summary-list">
                    <SummaryItem title="Email" value={user.email} />
                    <SummaryItem title="Age" value={user.age} />
                    <SummaryItem title="Bio" value={user.bio} />
                    <SummaryItem title="Description" value={user.description} />
                    <SummaryItem
                      title="Key Skills"
                      value={
                        <div>
                          {user.keySkills.map((skill) => (
                            <div
                              key={skill}
                              className="ds_tag ds_!_margin-right--1"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      }
                    />
                    <SummaryItem
                      title="Image"
                      value={<img src={user.image} alt="user" />}
                    />
                  </ul>
                </div>
              </div>
            </div>
          )}
          {testimonials && <h3>Testimonials</h3>}
          {testimonials &&
            testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <InsetText
                  content={
                    <>
                      {testimonial.content} <p>Rating: {testimonial.rating}</p>{" "}
                    </>
                  }
                />
              </div>
            ))}
        </div>
      </LayoutComponent>
    </>
  );
};
export default UserProfilePage;
