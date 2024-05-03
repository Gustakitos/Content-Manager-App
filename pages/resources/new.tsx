import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const DEFAULT_FORM_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

export default function ResourceCreate() {
  const [form, setForm] = useState(DEFAULT_FORM_DATA);
  const router = useRouter();

  const { title, description, link, priority, timeToFinish } = form;

  const submitForm = () => {
    axios
      .post("/api/resources", form)
      .then(_ => router.push("/"))
      .catch((err) => console.log("error: ", err));
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) =>
    setForm((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1>Add new resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Title input"
                      value={title}
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Description input"
                      value={description}
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="https://..."
                      value={link}
                      name="link"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={priority}
                        name="priority"
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to Finish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="60"
                      value={timeToFinish}
                      name="timeToFinish"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="help">Time in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      onClick={submitForm}
                      className="button is-link"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
