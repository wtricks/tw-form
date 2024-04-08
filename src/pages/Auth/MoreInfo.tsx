import { useEffect, useState } from "react"
import AuthWrapper from "../../components/AuthWrapper"
import Input from "../../components/Input"
import Button from "../../components/Button"

const MoreInfo = () => {
    const [hasBuisness, setHasBuisness] = useState("")
    const [isOffering, setIsOffering] = useState("")
    const [audieceSize, setAudieceSize] = useState("")
    const [relevantTopic, setRelevantTopic] = useState("")
    const [material, setMaterial] = useState("")
    const [money, setMoney] = useState("")
    const [topics, setTopics] = useState<Record<string,boolean>>({})

    const [error, setError] = useState<Record<string,string>>({})
    const [progress, setProgress] = useState(50)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!hasBuisness) {
            setError({ hasBuisness: "Required" })
        }
        else if (!isOffering) {
            setError({ isOffering: "Required" })
        }
        else if (!audieceSize) {
            setError({ audieceSize: "Required" })
        }
        else if (!relevantTopic) {
            setError({ relevantTopic: "Required" })
        }
        else if (!money) {
            setError({ money: "Required" })
        }
        else if (Object.keys(topics).filter((key) => !!topics[key]).length < 3) {
            setError({ topics: "Atleast 3 topics are required" })
        }
        else if (!material) {
            setError({ material: "Required" })
        }
        else {
            console.log("Submitting Form with values: ", {
                hasBuisness,
                isOffering,
                audieceSize,
                relevantTopic,
                money,
                topics,
                material
            })

            setProgress(100)
        }
    }

    const addTopics = (name: string) => {
        setTopics({ ...topics, [name]: !topics[name] })
    }

    useEffect(() => {
        setError({});
    }, [hasBuisness, isOffering, audieceSize, relevantTopic, money, topics, material])

    return (
        <AuthWrapper
            heading="Tell us little more about yourself."
            tagline="Your answers will help us build an experience to match your needs."
            onFormSubmit={handleSubmit}
            progressBar={progress}
        >
            <Button type="button" className="fixed top-50 transition-all -right-10 flex items-center hover:right-0" variant="primary">
                <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17H12.01M12 14C12.8906 12.0938 15 12.2344 15 10C15 8.5 14 7 12 7C10.4521 7 9.50325 7.89844 9.15332 9M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <span>Help</span>
            </Button>

            <Input
                type="select"
                label="Do you currently run a online buisness?"
                className="mb-5"
                onChange={setHasBuisness}
                value={hasBuisness}
                error={error.hasBuisness}
                placeholder="Please choose an option"
                options={[
                    {
                        value: "Yes",
                        label: "Yes"
                    },
                    {
                        value: "No",
                        label: "No"
                    }
                ]}
            />

            <Input
                type="select"
                label="Are you already teaching or offering content online?"
                className="mb-5"
                onChange={setIsOffering}
                value={isOffering}
                error={error.isOffering}
                placeholder="Please choose an option"
                options={[
                    {
                        value: "Yes",
                        label: "Yes"
                    },
                    {
                        value: "No",
                        label: "No"
                    }
                ]}
            />

            <Input
                type="select"
                label="How big is your current audience (email list, social media followers, subscribers, etc.)?"
                className="mb-5"
                onChange={setAudieceSize}
                value={audieceSize}
                error={error.audieceSize}
                placeholder="Please choose an option"
                options={[
                    {
                        value: "Less than 10,000",
                        label: "Less than 10,000"
                    },
                    {
                        value: "10,000 to 100,000",
                        label: "10,000 to 100,000"
                    },
                    {
                        value: "100,000 to 1,000,000",
                        label: "100,000 to 1,000,000"
                    },
                    {
                        value: "1,000,000+",
                        label: "1,000,000+"
                    }
                ]}
            />

            <Input
                type="select"
                label="Which topic is most relevant to your buisness or content?"
                className="mb-5"
                onChange={setRelevantTopic}
                value={relevantTopic}
                error={error.relevantTopic}
                placeholder="Please choose an option"
                options={[ 
                    {
                        value: "Math",
                        label: "Math"
                    },
                    {
                        value: "Science",
                        label: "Science"
                    },
                    {
                        value: "History",
                        label: "History"
                    }
                ]}
            />

            <Input
                type="select"
                label="Approximately how much money do you make charging for your knowledge today (in courses, consulting, books, speaking sessions, etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your buisness."
                className="mb-5"
                onChange={setMoney}
                value={money}
                error={error.money}
                placeholder="Please choose an option"
                options={[ 
                    {
                        value: "Less than $100,000",
                        label: "Less than $100,000"
                    },
                    {
                        value: "$100,000 to $500,000",
                        label: "$100,000 to $500,000"
                    },
                    {
                        value: "$500,000 to $1,000,000",
                        label: "$500,000 to $1,000,000"
                    },
                    {
                        value: "$1,000,000+",
                        label: "$1,000,000+"
                    }
                ]}
            />

            <p className="text-sm font-medium select-none ml-1 text-slate-700 mb-5">
                What are you hoping to do first on Teachable? (Select up to 3 to get started as quickly as possible)
            </p>

            <Input 
                type="checkbox"
                label="Create an online course"
                className="mb-1"
                onChange={() => addTopics('course')}
                value={topics.course as unknown as string}
            />
            <Input 
                type="checkbox"
                label="Create a coaching program."
                className="mb-1"
                onChange={() => addTopics('coaching')}
                value={topics.coaching as unknown as string}
            />
            <Input 
                type="checkbox"
                label="Create a digital download (ebook, article, template, worksheet, etc.)"
                className="mb-1"
                onChange={() => addTopics('digital')}
                value={topics.digital as unknown as string}
            />
            <Input 
                type="checkbox"
                label="Create a community or forum."
                className="mb-1"
                onChange={() => addTopics('community')}
                value={topics.community as unknown as string}
            />
            <Input 
                type="checkbox"
                label="Create a pre-sell"
                className="mb-1"
                onChange={() => addTopics('presell')}
                value={topics.presell as unknown as string}
            />
            <Input 
                type="checkbox"
                label="I'm not sure yet"
                className="mb-1"
                onChange={() => addTopics('notSure')}
                value={topics.notSure as unknown as string}
            />
            <Input 
                type="checkbox"
                label="Something else (please tell us more)"
                className="mb-1"
                onChange={() => addTopics('other')}
                value={topics.other as unknown as string}
            />

            <p className="text-xs text-red-600 ml-1 mt-1 font-medium">{ error.topics }</p>

            <Input
                type="select"
                label="How much content or training material (videos, worksheets, downloads, etc.) do you already prepared?"
                className="my-5"
                onChange={setMaterial}
                value={material}
                error={error.material}
                placeholder="Please choose an option"
                options={[
                    {
                        value: "Less than 10",
                        label: "Less than 10"
                    },
                    {
                        value: "10 to 100",
                        label: "10 to 100"
                    },
                    {
                        value: "100 to 1,000",
                        label: "100 to 1,000"
                    },
                    {
                        value: "1,000+",
                        label: "1,000+"
                    }
                ]}
            />


            <div className="flex justify-end">
                <Button type="submit" variant="secondry" className="ml-auto">
                    Next
                </Button>
            </div>

            <div className="h-10"></div>
        </AuthWrapper>
    )
}

export default MoreInfo